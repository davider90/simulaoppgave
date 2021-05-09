import './ListElements.css'

const ListElements = (data) => {
  const list = data["data"];

  return list.map((element) => {
    return (
      <div className="List-element" key={ element["id"] }>

        <div
          className="Element-ID"
          id={ element["type"] }
        ><p>{ element["displayId"] }</p></div>

        <div className="Element-text">{ element["description"] }</div>

      </div>
    );
  });
}

export default ListElements;
