import "./App.css";
import data from "../data.json";
import logoMatana from "./assets/FA_Logo-Matana-University-(2)-copy-new A 1.png";
import footerImg from "./assets/foot.png";

function App() {
  console.log(data);

  return (
    <>
      {data
        .sort((a, b) => {
          const nameA = a.namamahasiswa.toUpperCase();
          const nameB = b.namamahasiswa.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }

          // names must be equal
          return 0;
        })
        .map((d, i) => (
          <div key={i}>
            <div className="container">
              <div className="head">
                <img
                  src={logoMatana}
                  alt="logo-matana"
                  className="logo-matana"
                />
                <img
                  src={
                    d.foto
                      ? d.foto
                      : "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAMAAzAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQIDBgEAB//EADoQAAIBAwMCBQEGBQMDBQAAAAECAwAEEQUSITFBEyJRYXEyBhQjQoGRJFJiobEzU3LB0fAVNDWCkv/EABkBAAMBAQEAAAAAAAAAAAAAAAECAwQABf/EACIRAAICAwEBAAEFAAAAAAAAAAABAhEDEiExEwQiMkFRYf/aAAwDAQACEQMRAD8AxuoRmObdgAGqra4Ea+GxwFPWmWrQ71pBnDLn4NWZBDqOXIyrVcrA5zzSMPLE3kOKKhvgSPE8prrOoYmFD5o22fFW215eWEgeCR0x+ZD/AJFDLKGOQcirlcEYPSiuijhdR03VBjUrVRJnH3i3wrfJHelF9BBHeGO2nM0Kfnxgk1CVY0Qypwyjg1dpNp95uY4s5UkE/NBjJD7QNPSKE31wu4dEWqtVvDNKAzYx0Fai4txBYpGvCovSsHqDZuGxU8r1K4Y7sm9yi8LyfWqDNubOaH21NFrI8jNqxpBsDsOUJHwaYw3U6gbm3j4pXDxRCMR0p4ZWgSx2Porncozyahc6TbXqHAVZCOoFLEeQcijbS9eNwG6VqjltdMk8VeGX1fTJrB8EEc5zQ8cu4pIGJ2fmXqp/7Vudahhv9Obd9SjIr55c5srlD1R+G+KLfeCpOumkt9UkwHDHIHmANMrbXf8AcGfmsfpc0aTNDKCRnaDnp6UXI2yTb/enU2RnBG4ttWt5PzbT70xhlWQAqc/Br5ws/wDUaMttQliIMcmMe9U+rIvF0b3a7LmYf1mk+rMfurcmj1na4zK5yx6mlmsn+GPyKyS9NUfBODzVoNUKelXA0BhvdJvjastcoVd0HrkVqWOeKQavHskDKO9aJEYlBHi24kXr3oUyEHDDK0Xp2G8SLOc+ZfihrmMpIy46GpsoThlaNsxNkfymj4L1ZDtcBWpOOPmrFkyPOP1FddHND15cbUI3Bjzj0rU/ZixYhZyp9elY6x5SM/Vz1rd6HI8Sqyk7e61yfQ1wbaxOVtSR3rD3PMhNazVSZLduayc3DEVD8hmj8eNEEFWKtQXpVkeTWJm5FqLVqJk1FMCiIzntTRBLwvjj8tRljIGR2q9OlQkIwa0IzyB3umWBkz2rJatkDnng1obknBpBqwJTNMpdJyiqA4j51kD4LAEj3FMr2UAJKgZkYdR2+aTR8KpJ7nFMIJ5pNOOz64jg4IHFXRnkiUdyjHAYH4NELMvUZpV98WQ4uYUfHUjg/uKujMLEeDcPEf5ZBvX9xzRsnQ8ttVtrcCOclSehqGszJJbI0bhwW4INZrUHcyYcxnA4KNkGoWbtlhkkD3pZIovBgh9auB4oQMc81ehyKU4ebs0DqcIeDPeik5r0o3RsPatLM6MzZv4FxG2fobB+KN1WDbiQd+tAXMfh3DL2anUY+96WuOWAwfkVJlhFiuEVMgjIPauIpZgo9aARvpOT4QxX0PTINsC7R161gtI2/fMZBQME4rey3K2dqoQEsw4xQtD06KNau47dfDHmkwRWVaQB8uaZ3UFxdytkS7uTtCnNLjZxwt+OzK56bwR/ms+Rps0Y014XwbXIA5okwEDgcVZYQJkZ2tz1pqIUcAYrNL/DVGxL4RoiCM00FkM9K7JbCNM8UYoMmgVBxVUv0mry8akhiB81w7XBwRWhGVvoouOhFI9UAEXNaC9XYSccUg1UgQO3agv3AfgkicqV9C/FE27Ik8yscqy4x80IThF9etWY4UrgkgAmtBnBZCFZlU9DXkkI6Hmq7gBZmHXmuKaIKLm5hLnH1Yq2x53mqpBi0j9yatsfpf5rmdQX3q1G4qipqeKU4fA7W2/3rpNRboDXeK0mcR61Hg7xxRP2dmUtNCfzgMvz3q7UoxJA2RyBSXSpjb3qMccNg/BpGOgrVIDDdNj6W5FS0i3E97GrKSmfMM9RTPXIRJAJVHK/4qjQo8zxEZzu5PtU5ukWxLaSRttItrKzv47iGxRUJ5i6547/APemepayZb2G305Wt8A+KxRSVHscULpsR+6wzP1ZMgegqZIf8IBQXYkP3HtUJXrZdxqTSF02oXLSsIruUgnGd3X3q6OWRkxPdb89FfkV620MtKX8Z/DPGxetEtpUpURIzKfzeJyKaOPZWibyqPGCR2tiXIaP7s5GBLCSFz/UvT9quWG7tpFjlAlD8q8fIYf9KnDZSxqyswwp5welEXD3Nvbh0PhxoylGDc7u4HtUZ469NGPLbpEWnKgKUYN7jFLbzUVj4LDJ7daeT6xfzmK0EiEzkLueMEjNLNTs18Zkt4QqKSHkxyx9qnFNseU9fRPPBeXjGSOF8Yyu4YzXodN1hdxFu2FGSuRTW3giGAVYnpzTA20aruXeGI5IOK1Ri68MuRpMyckrNlJgQ2OhpDrWRb7B+Zh+lfS7NYp5vut3HHOjrwZOSPbPWlut/YaO7s3u7O68EIGfwpipBx2Bzn9xQSpnKdqj5ROfO+DwoAomJfwN+7AA9aDkHhvIhYZ3UQx22JYKdrYHxVBAAnJJPU17OBXO9dHWmFCrjywQL/Rn+9X2IzGx96oux5419I1FE6eMwN/yoHFuKkKkFrpFA4dt0qCtx75rvix/7i1VkK5AOQe9aDOTlUMhFZe5HgXR9Ca0+4AdaR6rb754+wZgCaDGQ/tJVu7BQ/BZMGq9DR1mmixyBgH5qcduqxKqdAMU3+zsMP3lxNjdwVGeuKnkXC2F/qHdrcLMVSPKqihQD7VTcSCC6RicDPNVF0gulMIIRjmj9VtxOEaMZyKyyl+k2KNysib9YZVORkHrnrTJNSt5EGG83pSJbZ3ADoeOnFERI0KcJmljlpBl+PYexVw8mVUD360j1S8E98oj3KsYxjOcn1qy7nnKtGqHnqxHSg4oR6eb1qeTI5IfFh1YW0jg2s+7ZskHmPQVpPJOS8TB0c5DL0NJJod2mqowDnOanpE/iQiJpNrJ2psbonnhuMjD+IfDA4681VdpL4DEZB96ibkwbh19x3oSW8MhIJY+g9a2fZa0ZFgdlOjzGHUTNeHESL9XXFZr7TahLNq0ngSOYX4HOBj4p5fOAnh4K7uSM1n9RgLRtMPqT/FZ3LpaOOjNa1axx3DOp5Kg4/WoeDI9hhVPHYnrRV+CyqX7jBrlrKBFtHSrw6TnwSMGU7XUq3cGugZwB34pvPHHMuJBn37il7wGCVT9SAg8dadommXX3F2yj8oUf2ovTV/APzQM8gmuJJF6MaY6cCLZfcmlOCUTJrjLzVyjFRdgDyK5HWUfd79PpmR/+QqOL8dY1x6q3Wjy1R31aidlUJfwh4ikNQuqtthDdweM0aZKrfa42soYHsaJyGFjIJLaN1YEbctXrbUGS++9RgFIs7fnFB+ElvYPsOFfy4HvVZk8C02gYyMAelZ5u2aYL+R1pV/PeIxuSAVwAAe3r7VqLW83RoD2FYfQmjBdF67d1aOxYHczthV61lyI2YWh+1yQowKolmKoxBO7sM0Al2rSAIVCerHmrmlQ981Ki9oFdrovtlY4PUVYkDg5q774FIJUEZ5J7Uys7uFlyY0YUrCmitEY2656CgHaNJtwjwfUUzuryMEYVUHpQs0sE8ZSOMEnuKonwm10ujUSJkEc1MWanliP0oWMmMKCcYopbjK9c0N6O0sValAkbD/NJZpFVZARkOuKbapNkfNK44maKV8BkQZPPSnj0jNUZW+ZvC8yHCnHm70JB5Ub/lReoMDE5B8pbj96BkOwVrgZJlxkqqRzjjOe1VhqttE8a7hj9XFVZElfRrFMsaLjCjJ96P00fwq0tu5PEu5z23kD4FNLA4txSDBRHFDyxM7ZBHTu2KIDUu1Bv4j9KJwVurhao5rtUJ0drmQDyM14kVAnmuOCpvxLa3QcefJ/ShJ5N7iIfpV6yDwMMQNpyaX7whDZ5ycZrPL01R8G2kBbe8EZYFmUjg0+VDJbTRodrfUKxtpMVuY5iceYDOK2FtJiQEDr1FRyF8fCM9nJbIjSPJtPXw8Gi7WPeg8KXPyKYiNZbXawyCMV3RlgtrtluhuhkG1sjp6EVOKsrQufTZ3TysGJOfSj7K1mg5K7hjkdRWkGi5QSWtyrqRkbh/1FVvpl7GPLGj/DU6gI5oyt9FcByYkJXuGFchvDEmJImT9K0EunXmdxs3J/pANKtXWa1tzNNA0cfYN1b4AouAN/6ZSdQh6etRNyI8SRMWjPUelLXtpblwwiEeep7iuR2k1v4m6fenQArUnAosjOaldBQ8krbYwOSOcUjurW90ostzdRGB8+FHG2XcHuQfpHzRN8o1LUbfTQxRZTukYdQqjNX/bIxtFBLDnxfFMW32Ap4IjN9MncM7IqZ4LZY16T/TyOnpRBCEcDIU8qaEuJzI2xcKlaImeRVuwM0w0jAuHlz/pRlqWNwOaPsWCWF7If5Nv71WyVA8EbzZKKWZ2JwBTeElECHggULo0bfcWION4wPf1zUklz0II7UoQ5G5oC/b+IPwKIifnrXniWR2barc9SKKAczXt1M1+zuqv0tsf/AGqmbQ9UhzvtJMeo5qtE7Ai1ROeuMVyWOWE4ljZD6MMUVazWioBMgdz1yelDz0ZKymLzEoRkFeRQccHiOQWJiXLBjTO7VUuVeAALjIx6UHMpitAgAznzeozUJu2aIKkK/vMpkCKpyDxW4s3Y2sUrfmQZ+axMcUau3PPXk9K2+gDxtJRD1XI/vUpLhaDH+mT749hIzRUiKzZPApPp8ngT7Gx7U/CbwPeovhpiwrTjLES1tK23HSm0eoTjG9Qx9SKzTG7tX3RDctSbXiow8cgcdfLTqQ8lB+of3GoS7cgqv6VmtQma4u2kmYuV+nngfAqMl9PcjAikAPc9KiIvDA3HPqaZyISUV4iSqFXc4GO5pFql7uJC8Ip5NX6peF2aNWIUdhWa1e5KLFEON55+KRK2TkwXStY+7faGa7kx5YXSPcOMnpUftDePLqUhSRfBSUsNvqRS2+JgmwowM5z61Y0ayycYwq7sVVIm2TLeTf2c0vbyylT0qcspaIdhngCqgckk9TVYojIsxkHNEp5dIuP6iKFB4opv/hD6s9MKi63LCBNu4IowCPWrGZZW/EbLepoVZnFuI9xC5zjPeoGRhyGoBoPWMKeCRV43keUHigYJXDfjDZ705sdbNhB4UVvFICdxZ1ySf/BRA0fVCEXpivbo9p4WkUl6fWpRTuepp1nQX+OGXlvbTqVljjcf1KDWU1b7NWUgLWxMD/09P2p+8jE0PPnY1UlJSRFQlFmJubJ7VOZ1Y8Aggjj2oK4WaUt4bYJOfpzT3UIHcMQPiljeKrhgSvGCKzyiXjIAOjm4IMhOfVeM1s9GthY2cUS54zknvQenWwO0tz804CYAHpU2isGV30JEfjR9V83pTnTrpLm3jKEZI9aVXG6S1kj9qzUd1cafMRlgm79qm42W31Z9LSRAAGx69M1Dw4ZCx2A+uRWFGrTIFYT7vTB6UfaaxMIxLJIMHoD1pfmN9bNNcsiDyjGBSLUdRjSI7chicYzS2+1vhsPyTihLGCS8l8a4J46CjrQkp2TG9yWYcetZn7Rz4uI1U8rz81rbnEalVNZrU7EXLhmXJBoisoZReWYYIDIF4oNZih54ZVwQaOtLV7WQHnb71bqen+IPHj5z1AHWmTQtCe6ZSnlGMnOPSh0epXcdw0hMkEiqOAcdqFBK9Rj54q0aojJOwwuAKKmcDSYh6tSppCPmr5Z/4WFMdGzTChyI0oEcal3P5QKZfZ6wW4uBPOv4MWXdT3wM/wCcUJpNz4DyYRmaWMx5Xque4p7FD/6foDOXBlucIg6Hb1PH7UrGsUSZdmdhyxzVZzRAHHPeoEYois35jYlfgGiI0KjBorwBlTjjArpi9qyHoMoHFQk5GKudcVQ9WUyEsYFLChzxS+eCPOdopnKaAnyTwadTQjxspSTbjse1NoPxowymk3hluhwR3ojTrsQTeHJkBu/pQckzowaGRUg+/oaquNPhuo9so2NjrijSu/kYI9q8fwuSDj96jdGnUy1xoc8bARqD/UKidDvAoyck9s1rlZZFwNp9B0qPgHP+mP8A9V2wvzRm7LQZTNuuMIg7ZyTTKZIoF2x/2GKZTJsTCqB8Gld1u2nNc2dqLJSXfGKkltvIBGKKs4DNJk9KPPhRHDEAipthSA101Hj5FCnTxC3LAj0zR815Iw2wRsfc9KHW1nl5dv0oIZoFnjt41w4FAPaR3J/9upX1K08j05dx35Jplb2I/lFNvQulmRj+y9vMfPbjJq9/sdabQWh4HvW2itgowRU2g4xim+gPkjDj7MWajCq6E91cgigr7Q7uN9yXBkA/3Otb57Ydcc0JNbZ6jNd9AfNHzxzLAcXCFR/N2ro83Nay8skfcrqNp7YrN3GlzQzMsILx5yDVoZLIyxH1VFyijuAK8yVKxXfbI383NXMlRZpiLZk60I60ynTrQUiUtjULpgaCkHNNJI80NJDQ2O1AgB0qu4hyOOtFeFhs1Ipnmu2Ooq0u/e2kENwSUP0sT0rROFuLbKHNZm4gzRek3rW7+FL9DcZohXBxZRL4JPU1YkW5qrjkESMKKtGyCxoMfjAb1NpxilF1G+DgE59KfXJTcTQojVmo2I0J7e2um4BCj4pjBpQJBky59TTSCJVHFEjyig+nVQItlHGg8lDzQqH44phK/FCOMnNA6iqOPzUdClDRDmjI6m0OqLQua74dSUVavSuRzB2hyOaFngx0GKaYquVMimFM5c2/elrw5bpWjuI8ZHrSyWDz06JtGg0wg20fP5RRDigNHfMK0xag2UigSVKEkj5pg4zQ7qKSx6Fsic1UYwaNkj5qh0x2rjmgVo64I6vK5rqJQBQLJDmhpLXPQU38MV4QA9KZAaEommiOGyRRqX8pQLGuKuntFPSuwWqgUzkBIqVWc7mOTVyErxRAgAFRaLFdZ1USSbaK6bjPcVSy1WRROCPFzUg2aGXNWpnNdRxaM1clVKauShQLCENXIaoTNWqccmhqdZdXSOKiDwPerUwwNdR1i65TPagGQZ5FOZ4+OlK5Vw9MhWf/2Q=="
                  }
                  alt="fiola image"
                  className="foto-mahasiswa"
                />
              </div>
              <div className="main">
                <h3 className="mahasiswa">{d.namamahasiswa}</h3>
                <h3 className="prodi">{d.programstudi}</h3>
                <h4 className="nim">student code : {d.nim}</h4>
              </div>
              <div className="footer">
                <img src={footerImg} alt="" />
              </div>
            </div>
          </div>
        ))}
    </>
  );
}

export default App;
