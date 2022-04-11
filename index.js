function receivesAFunction (cb) {
  return cb();
}
receivesAFunction (function () { return `function`});

function returnsANamedFunction () {
  return function nameFunction () {return `named function`};
}

function returnsAnAnonymousFunction () {
  return (function () {return `Anon Function`});
}
// returnsAnAnonymousFunction(function () {return ''});