const fs = require('fs');
let c = fs.readFileSync('add_macetes_all2.js', 'utf8');
// Remove the ``` fences that break the template literal
c = c.replace(/```\n  A₁/g, '  A₁');
c = c.replace(/\(incógnita\)\n```\n/g, '(incógnita)\n');
fs.writeFileSync('add_macetes_all2.js', c, 'utf8');
console.log('Fixed backtick fences.');
