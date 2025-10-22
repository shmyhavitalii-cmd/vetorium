import React from "react";
import { FileText, Settings, FileSignature, FileBadge, ExternalLink } from "lucide-react";

const documents = [
  {
    icon: <FileText className="w-6 h-6 text-[#D4AF37]" />,
    title: "Whitepaper v0.3",
    link: "/documents/whitepaper.pdf",
  },
  {
    icon: <Settings className="w-6 h-6 text-[#D4AF37]" />,
    title: "Technical Paper",
    link: "/documents/technical-paper.pdf",
  },
  {
    icon: <FileSignature className="w-6 h-6 text-[#D4AF37]" />,
    title: "Private Sale Agreement",
    link: "/documents/private-sale.pdf",
  },
  {
    icon: <FileBadge className="w-6 h-6 text-[#D4AF37]" />,
    title: "Term Sheet",
    link: "/documents/term-sheet.pdf",
  },
];

export default function Documents() {
  return (
    <section id="docs" className="py-24 bg-black text-gray-100 border-t border-[#222]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-3xl font-semibold mb-10 text-[#D4AF37]">
          Official Documents
        </h2>
        <p className="text-gray-300 mb-14 max-w-3xl mx-auto leading-relaxed">
          Access our official project materials, governance frameworks, and 
          technical references. Each document is verified and hosted under 
          <span className="text-[#D4AF37]"> Vectorium Group</span> for full transparency.
        </p>

        {/* Documents Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {documents.map((doc, i) => (
            <a
              key={i}
              href={doc.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#111] border border-[#333] rounded-xl p-5 text-center hover:border-[#D4AF37] hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all duration-300"
            >
              <div className="flex justify-center mb-3">{doc.icon}</div>
              <h4 className="text-[#D4AF37] font-semibold mb-2 group-hover:text-[#E6C76E]">
                {doc.title}
              </h4>
              <p className="text-sm text-gray-400 mb-2">
                Download PDF
              </p>
              <ExternalLink className="w-4 h-4 mx-auto text-gray-500 group-hover:text-[#E6C76E]" />
            </a>
          ))}
        </div>

        {/* Smart Contract */}
        <div className="mt-14 bg-[#111] border border-[#333] rounded-xl p-6 max-w-2xl mx-auto text-gray-300">
          <p className="text-sm mb-2">
            <span className="text-[#D4AF37] font-medium">Token Smart Contract:</span>
          </p>
          <a
            href="https://solscan.io/token/J7gr5uPExeRmTc6GdVNyXj4zmYdXmYLYFC5TkkDngm4x"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D4AF37] hover:text-[#E6C76E] text-sm break-all"
          >
            J7gr5uPExeRmTc6GdVNyXj4zmYdXmYLYFC5TkkDngm4x
          </a>
        </div>
      </div>
    </section>
  );
}
