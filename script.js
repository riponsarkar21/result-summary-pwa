  // Select all tile rows
  const tiles = document.querySelectorAll('.tile');

  tiles.forEach(tile => {
    const inputs = tile.querySelectorAll('input');
    const totalInput = inputs[2]; // Third input is the readonly Total

    // Listen to changes on Bundle and Loose inputs
    inputs[0].addEventListener('input', updateTotal);
    inputs[1].addEventListener('input', updateTotal);

    function updateTotal() {
      const bundle = parseInt(inputs[0].value) || 0;
      const loose = parseInt(inputs[1].value) || 0;
      totalInput.value = bundle + loose;
    }
  });
