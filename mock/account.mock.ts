import { defineFakeRoute } from 'vite-plugin-fake-server/client';

const userInfo = {
  name: '爱喝蜂蜜绿的小斯斯',
  userid: '00000001',
  email: '',
  token: '',
  role: 'admin',
};

const userInfo2 = {
  name: 'test',
  userid: '00000002',
  email: '',
  token: '',
  role: 'test',
};

export default defineFakeRoute([
  {
    url: '/mock_api/login',
    timeout: 1000,
    method: 'post',
    response: ({ body }: { body: Recordable }) => {
      const { username, password } = body;
      if (username === 'admin' && password === 'admin123') {
        userInfo.token = genID(16);
        return {
          data: userInfo,
          code: 1,
          message: 'ok',
        };
      } else if (username === 'test' && password === 'test123') {
        userInfo2.token = genID(16);
        return {
          data: userInfo2,
          code: 1,
          message: 'ok',
        };
      } else {
        return {
          data: null,
          code: -1,
          message: '账号密码错误',
        };
      }
    },
    // rawResponse: async (req, res) => {
    //   console.log(req, res);
    //   let reqbody = {};
    //   res.setHeader('Content-Type', 'application/json');
    //   reqbody = { data: userInfo };
    //   res.statusCode = 500;
    //   res.end(JSON.stringify(reqbody));
    // },
  },
  {
    url: '/mock_api/getUserInfo',
    timeout: 1000,
    method: 'get',
    response: () => {
      return userInfo;
    },
  },
]);

function genID(length: number) {
  return Number(Math.random().toString().substr(3, length) + Date.now()).toString(36);
}
