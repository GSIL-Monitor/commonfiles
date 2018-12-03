var students = [
  170104130140,
  170104130139,
  170104130138,
  170104130137,
  170104130136,
  170104130135,
  170104130134,
  170104130133,
  170104130132,
  170104130131,
  170104130130,
  170104130129,
  170104130128,
  170104130127,
  170104130126,
  170104130125,
  170104130124,
  170104130123,
  170104130122,
  170104130121,
  170104130120,
  170104130119,
  170104130118,
  170104130117,
  170104130116,
  170104130115,
  170104130114,
  170104130113,
  170104130112,
  170104130111,
  170104130110,
  170104130109,
  170104130108,
  170104130107,
  170104130106,
  170104130105,
  170104130104,
  170104130103,
  170104130102,
  170104130101,
  160104100235,
  160104100233,
  160104100229,
  160104100143,
  160104100140,
  160104100111
]

console.log(students.length)

var prefix='db'
for (var i=0; i < students.length; i++) {
    console.log(`create user '${prefix}${students[i]}' identified by '${students[i]}';`)
    console.log(`create database ${prefix}${students[i]} DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;`);
    console.log(`grant all privileges on ${prefix}${students[i]}.* to '${prefix}${students[i]}'@'%' identified by '${students[i]}';`)
}
