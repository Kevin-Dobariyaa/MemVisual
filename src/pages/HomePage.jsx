import React, { useState } from "react";
import Header from "../components/Header";
import PartitionMethod from "../components/PartitionMethod";
import MemoryCreator from "../components/MemoryCreator";
import MemoryVisualizer from "../components/MemoryVisualizer";
import ProcessAdder from "../components/ProcessAdder";
import ProcessCart from "../components/ProcessCart";
import MemoryCraft from "../components/MemoryCraft";
import Footer from "../components/Footer";

function HomePage() {
  //Parttion Method

  const [partitionType, setPartitionType] = useState("static");

  // Memory Creator

  const [memory, setMemory] = useState(null);

  // Process Adder

  const [processCart, setProcessCart] = useState([]);

  const addProcessToCart = (process) => {
    setProcessCart((prevCart) => [...prevCart, process]);
  };

  return (
    <>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            <div className="lg:col-span-1 space-y-6">
              <PartitionMethod
                partitionType={partitionType}
                setPartitionType={setPartitionType}
              />
              <MemoryCreator createMemory={setMemory} />
              <ProcessAdder addProcessToCart = {addProcessToCart} processCart = {processCart} />
            </div>

            <div className="lg:col-span-2 space-y-6">
              <MemoryVisualizer partitionType={partitionType} memory={memory} />
              <ProcessCart processCart = {processCart}/>
              <MemoryCraft partitionType={partitionType} memory={memory} processCart={processCart} />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
