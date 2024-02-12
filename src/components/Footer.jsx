import React from "react";

function Footer() {
  return (
    <div className="fixed inset-x-0 bottom-0 py-5 text-center">
      {/* GitHub Link */}
      <p className="text-sm mt-2 opacity-50">
        &copy; {new Date().getFullYear()} <a className="hover:underline" href="https://github.com/PurplePeopleEated">Karra Maynard</a>. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;