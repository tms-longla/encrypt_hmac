
const crypto = require('crypto');

const secret_keys = 'JGfGz7oJOvMkV51BSvY6RNtP3prb7DECpO31BpQ0lhc='

const payload = {
  "store_id": "U4d40e623a09ac0536b8ee5678625c79f",
  "reserve_id": "210c716b-ca78-5026-8cc8-30e156f98903",
  "status": "success",
  "method": "create"
}

let json = JSON.stringify(payload)
var hash = crypto.createHmac('sha256', secret_keys).update(json).digest('hex')
console.log(hash) // code hmac được gen ở terminal

