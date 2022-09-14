const paginate = (protocols) => {
  const itemsPerPage = 10;
  const numberOfPages = Math.ceil(protocols.length / itemsPerPage);
  const newProtocols = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage;
    return protocols.slice(start, start + itemsPerPage);
  });
  return newProtocols;
};

export default paginate;
