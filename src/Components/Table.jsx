import TableHeader from "./TableHeader";

function Table({ children, headers, className }) {
  return (
    <table className={`table-wrapper ${className}`}>
      <TableHeader>{headers}</TableHeader>
      <tbody>{children}</tbody>
    </table>
  );
}

export default Table;
