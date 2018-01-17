interval = setInterval((state) => {
  console.log('Max all');
  $('#maxall').click();
  sac_text = $('#sacrifice').text().match(/\(([0-9]+.*)x\)/)[1];
  sac = Number(sac_text);
  if (state.last_sac === undefined) {
    state.last_sac = sac
  }
  if (sac > 10 && (sac - state.last_sac) < 1) {
    // TODO check if number is increasing really fast and hold off
    console.log('Sacrifice for', sac);
    $('#sacrifice').click();
    $('#maxall').click();
  }
  if ($('#softReset.storebtn').text() ===  "Reset the game for a new Dimension") {
    $('#softReset.storebtn').click();
    $('#maxall').click();
  }
}, 2500, {});

