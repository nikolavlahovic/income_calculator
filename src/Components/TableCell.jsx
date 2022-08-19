function TableCell({ children, className }) {
  return <td className={`${className} px-2`}>{children}</td>;
}

export default TableCell;
