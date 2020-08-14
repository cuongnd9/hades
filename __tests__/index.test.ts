import {hades} from '../src';

it('download image', async() => {
  await hades({
    url: 'https://kenh14cdn.com/thumb_w/660/2020/3/12/hd1-1583989092728481468447.jpg',
    path: `${__dirname}/images/image.jpg`,
  });
  expect(true).toEqual(true);
});

it('download gif image', async() => {
  await hades({
    url: 'https://raw.githubusercontent.com/103cuong/103cuong/master/banner.gif',
    path: `${__dirname}/images/banner.gif`,
    timeout: 7000,
  });
  expect(true).toEqual(true);
});

it('download go file', async() => {
  await hades({
    url: 'https://raw.githubusercontent.com/103cuong/uid/master/uid.go',
    path: `${__dirname}/images/uid.go`,
  });
  expect(true).toEqual(true);
});
