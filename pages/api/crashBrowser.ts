const crashBrowser = () => {
  let status = 'offline';

  const program = () => {
    status = 'Crashed';
    console.log(status);
  };

  for (let i = 0; i < 10000000; i++) {
    status = status + 1000; //this will crash the browser
    program(); //this too
  }
};

export default crashBrowser;
