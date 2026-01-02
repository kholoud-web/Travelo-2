import TicketHeader from "../../../components/Flight Flow/BookDetails/TicketHeader"
import TicketCard from "../../../components/Flight Flow/TicketCard"
import TermContact from "../../../components/Flight Flow/BookDetails/TermContect"
export default function BookimgDetails() {
     return (
    <div className="container mx-auto p-4">
      <TicketHeader />
      <TicketCard />
      <TermContact />
    </div>
  );
}