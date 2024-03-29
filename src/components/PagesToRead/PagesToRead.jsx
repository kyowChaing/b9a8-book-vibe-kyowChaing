
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import { useState, useEffect } from 'react';
import {getStoredBooksId} from '../../utilitis/storeBookId';
const PagesToRead = () => {


    const [books,setBooks]=useState([]);
    
    useEffect(() => {
        const storedBookIds=getStoredBooksId();
    // console.log(storedBookIds);
        fetch("https://api.npoint.io/fd871112904acfcad1cd")
          .then((res) => res.json())
            .then((data) => {
                // console.log(data)
                if(data.length>0){
                    const listedBook = data.filter(book=>storedBookIds.includes(book.bookId));
                    setBooks(listedBook);
                    // console.log(listedBook)
                }
            });
      }, []);



    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
    
    const data = [
      // {
      //   name: `${books[0].bookName}`,
      //   uv:`${books[0].totalPages}`,
      //   pv: 2400,
      //   amt: 2400,
      // },
      {
        name: 'The Catcher in the Rye',
        uv: 300,
        pv: 1398,
        amt: 2210,
      },
      {
        name: '1984',
        uv: 2000,
        pv: 9800,
        amt: 2290,
      },
      {
        name: 'To Kill a Mockingbird',
        uv: 2780,
        pv: 3908,
        amt: 2000,
      },
      {
        name: 'The Great Gatsby',
        uv: 1890,
        pv: 4800,
        amt: 2181,
      },
      {
        name: 'Sapiens: A Brief History of Humankind',
        uv: 2390,
        pv: 3800,
        amt: 2500,
      },
    //   {
    //     name: 'Page G',
    //     uv: 3490,
    //     pv: 4300,
    //     amt: 2100,
    //   },
    ];
    
    const getPath = (x, y, width, height) => {
      return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
      ${x + width / 2}, ${y}
      C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
      Z`;
    };
    
    const TriangleBar = (props) => {
      const { fill, x, y, width, height } = props;
    
      return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

      return (
        <BarChart
          width={1300}
          height={300}
          data={books}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="bookName" />
          <YAxis />
          <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      );
    
    // App.demoUrl = 'https://codesandbox.io/s/bar-chart-with-customized-shape-dusth';
   
}

export default PagesToRead;


