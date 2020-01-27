const initialPrinters = [
  {
    id: 1, 
    name: '01-INFORMATICA', 
    model: 'TASKalfa 356ci', 
    ip: '192.168.96.6',
    host: 'I7307531', 
    location: '00A.S2.014.0',   
  }, 
  {
    id: 2, 
    name: '02-DISEÑO-GRAFICO', 
    model: 'TASKalfa 356ci', 
    ip: '192.168.96.30',
    host: 'I7307184', 
    location: '00A.S1.025.0',   
  },
  {
    id: 3, 
    name: '03-REPROGRAFIA', 
    model: 'TASKalfa 356ci', 
    ip: '192.168.97.101',
    host: 'I7307567', 
    location: '00A.S1.040.0',   
  }, 
];

class PrinterFilter extends React.Component {
  render() {
    return (
      <div>Filtro de impresoras</div>
    );
  }
}

function PrinterRow(props) {
  const printer = props.printer;
  return (
    <tr>
      <td>{printer.id}</td>
      <td>{printer.name}</td>
      <td>{printer.model}</td>       
      <td>{printer.ip}</td>
      <td>{printer.host}</td>
      <td>{printer.location}</td>
    </tr>
  );
}

function PrinterTable(props) {
  const printerRows = props.printers.map(printer =>
    <PrinterRow key={printer.id} printer={printer} />
  );
  const rowStyle = {border: "1px solid silver", padding: 4};
  return (
    <table className="bordered-table">
      <thead>
        <tr>
          <th style={rowStyle}>ID</th>
          <th style={rowStyle}>Nombre</th>
          <th style={rowStyle}>Modelo</th>
          <th style={rowStyle}>Dirección IP</th>
          <th style={rowStyle}>Nombre del host</th>
          <th style={rowStyle}>Ubicación</th>           
        </tr>
      </thead>
      <tbody>
        {printerRows}
      </tbody>
    </table>
  );
}

class PrinterAdd extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);   
  }
  handleSubmit(e) {
    e.preventDefault();
    const form = document.forms.printerAdd;
    const printer = {
      name: form.name.value, 
      model: form.model.value, 
      ip: form.ip.value,
      host: form.host.value,
      location: form.location.value,
    }
    this.props.createPrinter(printer);
    form.name.value = "";
    form.model.value = "";
    form.ip.value = "";
    form.host.value = "";
    form.location.value = "";
  }
  render() {
    return (
      <form name="printerAdd" onSubmit={this.handleSubmit}>
        <input type="text" name="name" placeholder="Nombre" />
        <input type="text" name="model" placeholder="Modelo" />
        <input type="text" name="ip" placeholder="Dirección IP" />
        <input type="text" name="host" placeholder="Nombre del host" />
        <input type="text" name="location" placeholder="Ubicación" />       
        <button>Add</button>
      </form>
    );
  }
}

class PrinterList extends React.Component {
  constructor() {
    super();
    this.state = { printers: [] };
    this.createPrinter = this.createPrinter.bind(this);
  }
  componentDidMount() {
    this.loadData();
  }
  loadData(){
    setTimeout(() => {
      this.setState({ printers: initialPrinters });
    }, 500);
  }
  createPrinter(printer) {
    printer.id = this.state.printers.length + 1;
    const newPrinterList = this.state.printers.slice();
    newPrinterList.push(printer);
    this.setState({ printers: newPrinterList });
  }
  render() {
    return (
      <React.Fragment>
        <h1>Listado de impresoras</h1>
        <PrinterFilter />
        <hr />
        <PrinterTable printers={this.state.printers} />
        <hr />
        <PrinterAdd createPrinter={this.createPrinter} />
      </React.Fragment>
    );
  }
}

const element = <PrinterList />;

ReactDOM.render(element, document.getElementById('contents'));
