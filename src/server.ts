import app from '@/app';

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is up and runnint on port ${port}`);
});
