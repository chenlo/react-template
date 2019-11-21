const browsers = ['IE 11', 'Edge 15', 'Safari 10', 'Firefox 50', 'Chrome 49'];
const workingBrowsers = Array.from(browsers, c => `works in ${c},`);
const message = workingBrowsers.join(' ');

const element = (
  <div title="Outer div">
    <h1>React Template</h1>
    <p>{message}</p>
  </div>
);

ReactDOM.render(element, document.getElementById('contents'));