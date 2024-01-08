const Leftside = () => {
  return (
    <div className="pt-[40px] sm:pt-[60px] md:pt-[100px] lg:pt-[172px] flex flex-col gap-[40px] w-full max-w-[723px]">
        <h1 className="font-[800] text-[3.75rem] sm:text-[4.75rem] md:text-[5.25rem] lg:text-[8.125rem] text-[#020202] leading-[50px] sm:leading-[70px] md:leading-[90px] lg:leading-[119px]">Home of The Coke Boys</h1>
        <p className="text-[#00000099] max-w-[692px] text-[24px] leading-[35px] font-sans">Welcome to French Montana’s official website. If it’s not here then it’s probably not official. On this site you can shop, watch and play... So let’s get to it!</p>
        <img src="/images/signs.png" width={285} height={73} alt="" />
        <button className="bg-[#000000] max-w-[241px] py-[18px] text-center text-white mb-5">Enter The Mansion</button>
    </div>
  )
}

export default Leftside