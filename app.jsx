/*
PRELOADED MARKDOWN
*/
const PLACEHOLDER = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;
/*******************************************************************************************/

// App component renders all components //
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Editor />
      </div>
    );
  }
}

// Editor component renders Preview component //
class Editor extends React.Component {
  constructor(props) {
    super(props);

    // To store user input
    this.state = {
      input: PLACEHOLDER
    };

    // Have 'this' to point to the Editor, NOT the element
    this.handleChange = this.handleChange.bind(this);
  }

  // Called in response to onChange event //
  handleChange(event) {
    // Store the element's changed value
    this.setState({ input: event.target.value });
  }

  // Add onChange event for <textarea>, add preloaded text in placeholder //
  render() {
    return (
      <div id="editor-div" className="container">
        <br />
        <div className="card">
          <div className="card-header bg-dark text-white">Editor</div>
          <textarea
            id="editor"
            onChange={this.handleChange}
            value={this.state.input}
            className="card-body bg-dark text-white"
            rows="10"
          ></textarea>
        </div>
        <br />
        <Preview previewText={this.state.input} />
      </div>
    );
  }
}

// Preview component //
class Preview extends React.Component {
  constructor(props) {
    super(props);
  }

  // Renders preview-text inside #preview tag after converting it to HTML tags //
  render() {
    return (
      <div className="card">
        <div className="card-header bg-success text-white">Preview</div>
        <div
          id="preview"
          className="card-body bg-light text-dark"
          dangerouslySetInnerHTML={{ __html: marked(this.props.previewText) }}
        />
      </div>
    );
  }
}

// Render App in DOM //
ReactDOM.render(<App />, document.getElementById("root"));