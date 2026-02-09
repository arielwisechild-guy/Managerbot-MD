require('dotenv').config();

global.SESSION_ID = process.env.SESSION_ID || "KnightBot!H4sIAAAAAAAAA5VU2ZKiSBT9l3zVaNkUJaIiGhGVwgVFcJnohxQSTFnNTDY7/PcJrK6qfpjpqXlLkoxzzz3n3PsTpBmmyEQNUH6CnOASMtQeWZMjoIBxEQSIgC7wIYNAAeaCm0BucvGH/d5uP0yDJR87d2l68+6rjRRcOyFZJ4v5zuGqF/Dogrw4x9j7A2Cg6e7s5EySay2o/tUSvNO+s0g9uLiPDmKqjhxjvF8GoZ5EL+DRIkJMcBrq+QUliMDYRI0FMfkafX0R2f1FIXYQN+Cg3YOr9Kyaen2V6q1vbqvJCa3ZakWwo3+NPi8JAVXX1eGeVcWogsdINPvhbdOXQsgPHM/evYqqWNOxoL/RpzhMkW/4KGWYNV/WfbCaG1l1g+fpnEspyY4Hz43tKD5p443tavsMw2W+b/buLPsaca7is5G90o2AS3Loltmrzg+mr31WWDd3Uvrlel06VnWtt9XvxC3ynpXo/+i+NNebWbUYF1LVzA0Uc9rWF+xVtmtWbq+OqCWYA6ucLU0h+hr9kWGMG/O8Fu1k503LXTyqoTpc1j3x3C/umnSQ8l5c2vxVyD7pQ1aQP7GUGSc5TemI0mt4vhg9P5cPe1fV1sZxZNWaZN5ee/Y2n0S9kh/mZNR4Vk+LevepJdhxUZeaLfVvW+bcj4LZ6DChh9ENVy/PjiLUGD5Q+EcXEBRiyghkOEvbO4GXuwD6pY08gthTXjDnAsRynunSKV3q5fBe0Y1TeNpxmRp3rU7MRHRn7jxZbLIX0AU5yTxEKfLnmLKMNEtEKQwRBcpfP7ogRTV7M64tJ/JdEGBCmZMWeZxB/93V95/Q87IiZXaTelp7QAQo3Oc1YgynIW11LFJIvAsukXaBjAIlgDFFHx0ignygMFKgj6nVMr8V/rQZyBNdXoAuSJ6GYB8oQJDEoST2B7IwkhXhO/1Wtagwz7+liIEuiJ+vBn2JFzluIEj9kSgpwvf2+vFBr0XzEYM4pkAB2vpQ4ONS082myGk1m6l6qGqhCj7bec/Fm+7bjglXuxsTSzhrArPjLI/QM8uqIwamH3UC2OmX7m2m53X18g8g7YqRyTqO7OOkV4Sybx9MTnLrg3guDUk+7FVbFCTOOe2vO88a04srwLMkTam4Zyhn5FjVh7jPb/hNAbE9dSJz0Ez22rgNURf4qMQe+r1Yp3Owxf72OolkuWfrTp3Hgprs59yIC+O43JDbjfCasIka5qfb6bU2TtQ0tGlPdMN8x0tjG9fJ5Y5GiZM5zlyzr4Psqr4l9jkx8a9NhZ9Zao1qPwOMnoOfwta+/zTujXcbL+7R/Q3i1yb5l2kcOwFOrs6A+LJwoWlTxpPZLNXI0GJik56sVCiLMw8vF9PzwOPxowvyGLIgIwlQAEx9kmEfdAHJijavRhpkfyimqZyhh6HWNh5DytTPGdjhBFEGkxwovCy3wRu2A9u+skiWzyG9AAWkiTg+g8ff5xeK3VAHAAA=";

global.APIs = {
    xteam: 'https://api.xteam.xyz',
    dzx: 'https://api.dhamzxploit.my.id',
    lol: 'https://api.lolhuman.xyz',
    violetics: 'https://violetics.pw',
    neoxr: 'https://api.neoxr.my.id',
    zenzapis: 'https://zenzapis.xyz',
    akuari: 'https://api.akuari.my.id',
    akuari2: 'https://apimu.my.id',
    nrtm: 'https://fg-nrtm.ddns.net',
    bg: 'http://bochil.ddns.net',
    fgmods: 'https://api-fgmods.ddns.net'
};

global.APIKeys = {
    'https://api.xteam.xyz': 'd90a9e986e18778b',
    'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
    'https://api.neoxr.my.id': 'yourkey',
    'https://violetics.pw': 'beta',
    'https://zenzapis.xyz': 'yourkey',
    'https://api-fgmods.ddns.net': 'fg-dylux'
};

module.exports = {
    SESSION_ID: global.SESSION_ID, // Très important
    WARN_COUNT: 3,
    APIs: global.APIs,
    APIKeys: global.APIKeys
};