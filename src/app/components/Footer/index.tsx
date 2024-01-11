import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'
import { motion } from 'framer-motion'

export default function Footer(): JSX.Element {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">TorontoSizzle</h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Toronto-based restaurant established in 2001, which seamlessly blends traditional flavors with modern
              flair to your doorsteps.
            </p>

          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <dt className="my-4 font-semibold text-white">Quick Links</dt>
              <dd className="mt-0 leading-7 text-gray-400">
                <motion.a
                  whileTap={{ scale: 1.1 }}
                  target={'_blank'}
                  rel="noreferrer"
                  href="/menu"
                  className="text-primary h-10 w-10 rounded-full flex items-center"
                >
                  Menu
                </motion.a>
              </dd>

              <dd className="mt-0 leading-7 text-gray-400">
                <motion.a
                  whileTap={{ scale: 1.1 }}
                  target={'_blank'}
                  rel="noreferrer"
                  href="/contact"
                  className="text-primary h-10 w-10 rounded-full flex items-center"
                >
                  Contact
                </motion.a>
              </dd>

              <dd className="mt-0 leading-7 text-gray-400">
                <motion.a
                  whileTap={{ scale: 1.1 }}
                  target={'_blank'}
                  rel="noreferrer"
                  href="/delivery"
                  className="text-primary h-10 w-10 rounded-full flex items-center"
                >
                  Delivery
                </motion.a>
              </dd>
            </div>
            <div className="flex flex-col items-start">

              <dt className="my-4 font-semibold text-white">Social Media</dt>

              <div className="flex items-center">
                <div className="rounded-md bg-white/5 p-1 ring-1 ring-white/10 mr-4">
                  <motion.a
                    whileTap={{ scale: 1.1 }}
                    target={'_blank'}
                    rel="noreferrer"
                    href="https://facebook.com"
                    className="text-primary h-10 w-10 rounded-full flex items-center justify-center"
                  >
                    <BsFacebook size={24} />
                  </motion.a>
                </div>

                <div className="rounded-md bg-white/5 p-1 ring-1 ring-white/10">
                  <motion.a
                    whileTap={{ scale: 1.1 }}
                    target={'_blank'}
                    rel="noreferrer"
                    href="https://instagram.com"
                    className="text-primary h-10 w-10 rounded-full flex items-center justify-center"
                  >
                    <BsInstagram size={24} />
                  </motion.a>
                </div>
              </div>

            </div>
          </dl>
        </div>
      </div>

      <hr className="my-8 mx-10 border-gray-100 dark:border-gray-700 lg:my-8" />

      <div className="flex flex-col items-center justify-center md:flex-row md:justify-between mx-10">
        <span className="text-sm text-gray-400 text-center dark:text-gray-400">
          © {new Date().getFullYear()} TorontoSizzle. All Rights Reserved.
        </span>
      </div>

      <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />

        <div className="flex flex-col items-center justify-center md:flex-row md:justify-between mx-10">
          <span className="text-sm text-gray-400 text-center dark:text-gray-400">
            (647)123-4567
          </span>
        </div>

        <div className="flex flex-col items-center justify-center md:flex-row md:justify-between mx-10">
          <span className="text-sm text-gray-400 text-center dark:text-gray-400">
            info@torontosizzle.ca
          </span>
        </div>
      </div>
    </div>
  )
}