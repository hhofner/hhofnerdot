export default () => {
  return (
    <div className="flex flex-col items-start justify-between p-4 md:p-5 xl:p-6 w-full h-full">
      <div className="flex flex-row items-center gap-2 p-2 md:p-0">
        <div className="flex flex-col items-start gap-1">
          <h1 className="font-medium text-lg lg:text-xl">Hans Hofner</h1>
          <h2 className="font-medium text-2xl lg:text-3xl">Software Developer</h2>
        </div>
      </div>

      <div className="p-2 md:p-0">
        I am a software developer living in Japan. With a pragmatic mindset, I seek to write effective and high quality software.
      </div>
    </div>
  );
};
