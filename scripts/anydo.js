var nativefier = require('nativefier').default;

// possible options, defaults unless specified otherwise
var options = {
    name: 'Anydo', // will be inferred if not specified
    targetUrl: 'https://desktop.any.do', // required
    out: 'builds',
    overwrite: true,
    icon: 'scripts/anydo.ico',
    counter: false,
    bounce: false,
    maximize: true,
    disableGpu: true,
    hideWindowFrame: false,
    showMenuBar: false,
    fastQuit: true,
    zoom: 1.0,
    singleInstance: true,
    disableContextMenu: true,
    disableDevTools: true,
    asar: true,
    fileDownloadOptions: {
      saveAs: true // always show "Save As" dialog
    }
};

nativefier(options, function(error, appPath) {
    if (error) {
        console.error(error);
        return;
    }
    console.log('App has been nativefied to', appPath);
});