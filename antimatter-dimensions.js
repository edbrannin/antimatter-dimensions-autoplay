interval = setInterval((state) => {
  maxAll = () => {
    console.log('Max all');
    $('#maxall').click();
  };
  maxAll();
  sac_text = $('#sacrifice').text().match(/\(([0-9]+.*)x\)/)[1];
  sac = Number(sac_text);
  if (state.last_sac === undefined) {
    state.last_sac = sac
  }
  if (sac > 10) {
    if ((sac - state.last_sac) < 1 || sac > 500) {
      console.log('Sacrifice for', sac);
      $('#sacrifice').click();
      setTimeout(maxAll, 100);
    } else {
      console.log("Increasing too fast:", sac - state.last_sac, "since last tick");
    }
  }
  if ($('#softReset.storebtn').text() ===  "Reset the game for a new Dimension") {
    $('#softReset.storebtn').click();
    setTimeout(maxAll, 100);
  }
  // TODO Also reset if #confirmation isn't present
}, 500, {});

