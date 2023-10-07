// sanity.js

import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: 'zzf04piy',
  dataset: 'production',
  useCdn: false, // set to `false` to bypass the edge cache
  apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
  // token: 'skOdeJcTwCdqlocXRMtPmFyko8bJ9dBZeGvi1FmMgtMVc75BJU4hN6y0y7VFFz2jQFZ1fq2iiObvkka3eiiGi8LyhRHb4ZvG1taZXFyATL3LJ1GScIyRIO2mav1eyCHKF3kM6KXIj7gGYxCqZbrpiOrEAULOrILVFwTfRNevPdb9l6HBV0Xh'
})



// export default sanityClient({
//   projectId: "Your Project ID Here", // find this at manage.sanity.io or in your sanity.json
//   dataset: "production", // this is from those question during 'sanity init'
//   useCdn: true,
// });


