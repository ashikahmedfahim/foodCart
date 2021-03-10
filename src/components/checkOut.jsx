import React from "react";

const CheckOut = (props) => {
  const items = [...props.obj.items];

  const validItems = items.filter((i) => i.value > 0);

  let total = 0;
  
  for (let i of validItems){
    total += i.value*i.price;
  }


  return (
    <div>
      <table className="table container">
        <tbody>
          {validItems.map((i) => {
            return (
              <tr key={i.id}>
                <td>Food Name : {i.name}</td>
                <td>Quantity : {i.value}</td>
                <td>
                  Price : {i.value} X {i.price}
                </td>
              </tr>
            );
          })}
          <tr>
              <td colSpan="2">Total</td>
              <td>Taka : {total}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

};

export default CheckOut;
