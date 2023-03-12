import React from "react";

const CompletedMinting = () => {
  const viewOpenSea = () => {
    // Step 13: View your collection  on Testnet OpenSea
    // a) Paste in contractAddress in searchbar of Testnet OpenSea
    // b) You should see your colletion come up, in case not => create url via Step 14.
    // collectionName of deployed version: futuretechies
    const url = "https://testnets.opensea.io/collection/<collectionName>";

    // Step 14: In case you DON'T SEE your collection on Testnet OpenSea
    const nftUrl =
      "https://testnets.opensea.io/assets/goerli/<contractAddress>/0";

    window.open(url, "_blank");
  };

  return (
    <div className="minting-success">
      <div>All set! Your NFT has been minted.</div>
      <div className="button open-sea" onClick={viewOpenSea}>
        VIEW AT OPENSEA
      </div>
    </div>
  );
};

export default CompletedMinting;
