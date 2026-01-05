
import TicketHeader from './../../../components/FlightFlow/BookDetails/TicketHeader';
import TicketCard from './../../../components/FlightFlow/TicketCard';
import TermContact from './../../../components/FlightFlow/BookDetails/TermContect';
export default function BookimgDetails() {
     return (
    <div className="container mx-auto p-4">
      <TicketHeader />
      <TicketCard />
      <TermContact />
    </div>
  );
}