clearInterval(interval);
interval = setInterval((state) => {
  soft_resets = true;
  galaxy_resets = false;
  maxAll = () => {
    console.log('Max all');
    if (true) {
      $('#maxall').click();
    } else {
      // Going for the "no 8d" achievement
      ['tickSpeedMax', 'firstMax', 'secondMax', 'thirdMax', 'fourthMax', 'fifthMax', 'sixthMax', 'seventhMax'].forEach((id) => {
        selector = `#${id}.storebtn`;
        $(selector).click();
      });
    }
  };
  // Reset, if possible
  $('#bigcrunch').click();
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
  state.last_sac = sac
  if ($('#softReset.storebtn').text() === 'Reset the game for a new Dimension' || $('#confirmation').css('display') ===  'none') {
    $('#softReset.storebtn').click();
    setTimeout(maxAll, 100);
  } else if (soft_resets) {
    if (galaxy_resets) {
      $('#secondSoftReset.storebtn').click();
    }
    $('#softReset.storebtn').click();
  }
  // TODO Also reset if #confirmation isn't present
}, 500, {});
