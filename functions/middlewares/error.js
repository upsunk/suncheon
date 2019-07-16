module.exports = (err, req, res, next) => {
  if (err.message === 'abc') return res.status(403).send('권한이 없습니다.')
  res.send(err.message)
}
