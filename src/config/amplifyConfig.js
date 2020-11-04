const dev = {
  apiGateway: {
    REGION: 'us-east-1',
    emailURL: 'https://c3c6u0d3ql.execute-api.us-east-1.amazonaws.com/dev',
    leadsURL: 'https://c5gdkglkn9.execute-api.us-east-1.amazonaws.com/dev',
    ratesURL: 'https://zitc4tu1i8.execute-api.us-east-1.amazonaws.com/dev',
  },
  cognito: {
    REGION: 'us-east-1',
    USER_POOL_ID: 'us-east-1_Svmbj5SIM',
    APP_CLIENT_ID: '6i0jad1bdfggkqfiannh0794vm',
    IDENTITY_POOL_ID: 'us-east-1:67a1c374-4969-4e19-9a30-aed3ba15533e',
  },
}

const prod = {
  apiGateway: {
    REGION: 'us-east-1',
    leadsURL: 'https://uyyo83zwn1.execute-api.us-east-1.amazonaws.com/prod',
    emailURL: 'https://bq94ba2dee.execute-api.us-east-1.amazonaws.com/prod',
    ratesURL: 'https://5lshgifbik.execute-api.us-east-1.amazonaws.com/prod',
  },
  cognito: {
    REGION: 'us-east-1',
    USER_POOL_ID: 'us-east-1_Gul1XnVRI',
    APP_CLIENT_ID: '53htprl5vc9h3t9n0p2fg78jus',
    IDENTITY_POOL_ID: 'us-east-1:2a9b67b6-b401-45bd-b944-990baa26f130',
  },
}

// Default to dev if not set
const config = process.env.GATSBY_STAGE === 'prod' ? prod : dev

export default {
  ...config,
}
