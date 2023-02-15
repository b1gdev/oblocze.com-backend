module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '23ecb0bbb6d71ad1a847aa1d7e10ddd9'),
  },
});
