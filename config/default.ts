export default {
  port: 3000,
  mongoUri: 'mongodb://127.0.0.1:27017/expressnode',
  accessTokenTtl: '15m',
publicKey: `-----BEGIN PUBLIC KEY-----
MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAyPiTPNt7nFdRaMtUD8AW
bZWSlimuiiKC3gyvrmrED8YTrOgBGHC310iK1++U0lHwpCGN6IYMioPgRNQ//KBa
rlZeK3/MSP/fPjszh/3WwfUcYvmPbJ6Pt+aQUNFHhIdqSh8TCMiDPFzKp7pMkuWw
KmoKOA+wPimDgNQMsAkB+itj3ThMcfIwdy9FtRaxpl+NT+7vLiJCFg/I+l8CLVZE
rLjAAEeUUJ/LQtqYAWethBtmQnTSn3l6GbVuj9EsRWqiQnykxmUFtFgGumFkwB7D
gyAdmuhOO0qEvaNQO4i9iOo75K1ASM/7zaiIiBprDhDPkuV4WYYdfO8/nzjwChYT
dMfy1wJuTgrJdtRM6sFRxD72zM5A6eLxbRFea3Tczus5SIXEzvhfxOTWLiYoYdOF
uGvOJTrWOnJIO3WVL77zHXJXjnKLfyZ7XKbDMGlZrfmm6a+egAZyI3hZA2cVEUJj
RFiq9jNupICJIXWmTQUwaP9wb4l8JDoiVGM7ImDf1DpFg1PkqkuMazCeVAYQNaDt
rYbadPsS9zc1PMM3ogtIvHSv+l87yjzAeYM8hy8pRT5JknGkqSINxeztaKgM4shl
PCeKL043TyGtPd0UQ2BywvLLicpn3bXer+kgtLfCAmuW1T7bVNDmHWjVZIzPWbTb
r3huXSXpee3SSMfKe5gfBiMCAwEAAQ==
-----END PUBLIC KEY-----`,
privateKey: `-----BEGIN RSA PRIVATE KEY-----
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
-----END RSA PRIVATE KEY-----`
}
