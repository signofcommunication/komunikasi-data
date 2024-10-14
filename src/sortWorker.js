// src/sortWorker.js
self.onmessage = function (e) {
  const sortedData = e.data.sort((a, b) => {
    const nameA = a.namamahasiswa.toUpperCase();
    const nameB = b.namamahasiswa.toUpperCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });

  self.postMessage(sortedData);
};
