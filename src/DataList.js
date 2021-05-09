import { useState } from 'react';
import './DataList.css';
import ListElements from './ListElements';

const DataList = () => {
  const [data, setData] = useState("No data has been fetched");
  let content;

  fetchFile('./data.json', setData);

  if (data === "No data has been fetched") {
    content = <div>{ data }</div>;
  } else {
    content = <ListElements data={ JSON.parse(data)["data"] } />;
  }

  return (
    <div className="List">{ content }</div>
  );
}

const fetchFile = async (path, callback) => {
  const httpRequest = new XMLHttpRequest();

  httpRequest.onreadystatechange = () => {
    if (httpRequest.readyState === 4) {
      if (httpRequest.status === 200) {
        callback(httpRequest.responseText);
      }
    }
  };

  httpRequest.open('GET', path);
  httpRequest.send();
}

export default DataList;
