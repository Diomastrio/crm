import { StyledSubHeading, StyledDynamicChart } from "../../ui/GraficasUi";
import Heading from "../../ui/Heading";
import React, { useState, useEffect } from "react";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer,Tooltip,
  XAxis, YAxis, Pie, PieChart,  Cell, Sector, ScatterChart, Scatter, Legend, Bar, BarChart,
} from "recharts";
import { useDarkMode } from "../../context/DarkModeContext";

const COLORSS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx,cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,fill, payload,percent,value,} = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 20;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <>
      <text x={cx} y={cy} dy={5} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill="#28d4b7"
        stroke="#fff"
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill="#32C9FF"
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}stroke="#32C9FF" fill="none"/>
      <circle cx={ex} cy={ey} r={2} fill="#32C9FF" stroke="#32C9FF" />

      <text x={ex + (cos >= 0 ? 1 : -1) * 5} y={ey} textAnchor={textAnchor} fill="#4b42d4">
        {`${value} usuarios`}
      </text>
      <text x={ex + (cos >= 0 ? -20 : 50) * 1} y={ey} dy={25} textAnchor={textAnchor} fill="#32C9FF">
        {`(${(percent * 100).toFixed(2)}% Clientes)`}
      </text>
    </>
  );
};

function DynamicGraphs(data,n) {
  n = data.n
  const grafico=data.grafico

  data = data.data;
  const [datagen, setDatagen] = useState([]);
  const [datas, setData] = useState([]);
  const [dataArea, setDataArea] = useState([]);
  const [scatterData, setScatterData] = useState([]);
  const [activeClientsByDiscipline, setActiveClientsByDiscipline] = useState([]);
  const [activeMen, setActiveMen] = useState([]);
  const [activeWomen, setActiveWomen] = useState([]);

  const [clientsByDiscipline, setClientsByDiscipline] = useState([]);
  const [activeClientsByDispGen, setActiveClientsByDispGen] = useState([]);

  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = (data, index) => {
    setActiveIndex(index);
  };
  const [activeIndex1, setActiveIndex1] = useState(0);
  const onPieEnter1 = (data, index) => {
    setActiveIndex1(index);
  };

  const { isDarkMode } = useDarkMode();

  const colors = isDarkMode
    ? {
        totalSales: { stroke: "#32C9FF", fill: "#2596BE" },
        extrasSales: { stroke: "#25BE5C", fill: "#25BE5C" },
        text: "#e5e7eb",
        background: "#18212f",
      }
    : {
        totalSales: { stroke: "#32C9FF", fill: "#32C9FF" },
        extrasSales: { stroke: "#25BE5C", fill: "#25BE5C" },
        text: "#374151",
        background: "#fff",
      };

  useEffect(() => {
    const fetchClienteGender = async () => {
      let countH = 0;
      let countM = 0;

      data.forEach((cliente) => {
        if (cliente.genero === "H") {
          countH++;
        } else if (cliente.genero === "M") {
          countM++;
        }
      });

      setDatagen([
        { name: "Hombres", value: countH },
        { name: "Mujeres", value: countM },
      ]);
    };

    fetchClienteGender();
  }, [data]);

  useEffect(() => {
    const fetchClienteActive = async () => {
      const counts = data.reduce(
        (acc, cliente) => {
          acc[cliente.cursa_actualmente ? "true" : "false"] += 1;
          return acc;
        },
        { true: 0, false: 0 }
      );
      const pieData = [
        { name: "Activos", value: counts.true },
        { name: "Inactivos", value: counts.false },
      ];
      setData(pieData);
    };

    fetchClienteActive();
  }, [data]);

  //active segun genero
  useEffect(() => {
    const fetchActiveMenGender = async () => {
      let countH = 0;
      let countM = 0;

      data.forEach((cliente) => {
        if (cliente.genero === "H" && cliente.cursa_actualmente === true) {
            countH++;
        }
        else if (cliente.genero === "H" && cliente.cursa_actualmente === false) {
            countM++;
        }
      });

      setActiveMen([
        { name: "Activos", value: countH },
        { name: "Inactivos", value: countM },
      ]);
    };
    
    fetchActiveMenGender();
  }, [data]);

  useEffect(() => {
    const fetchActiveWomenGender = async () => {
      let countH = 0;
      let countM = 0;

      data.forEach((cliente) => {
        if (cliente.genero === "M" && cliente.cursa_actualmente === true) {
            countH++;
        }
        else if (cliente.genero === "M" && cliente.cursa_actualmente === false) {
            countM++;
        }
      });

      setActiveWomen([
        { name: "Activas", value: countH },
        { name: "Inactivas", value: countM },
      ]);
    };
    
    fetchActiveWomenGender();
  }, [data]);

  useEffect(() => {
    const fetchClienteDater = async () => {
      const labels = [ "Jan","Feb","Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",];

      const areaData = data.map((item, index) => ({
        label: labels[index % 12], // Use the month labels, repeating every 12 months
        num_clientes: data.length, // The total number of clients is the length of the data array
        numero_diplomados: item.numero_diplomados,
        diplomados_terminados: item.diplomados_terminados,
      }));

      setDataArea(areaData);
    };

    fetchClienteDater();
  }, [data]);

  useEffect(() => {
    const fetchClienteDate = async () => {
      const scatterData = data.map((item, index) => ({
        x: item.edad,
        y: item.numero_diplomados,
        z: index + 1,
      }));

      setScatterData(scatterData);
    };

    fetchClienteDate();
  }, [data]);

  //faefadfafsfsafafafdafdsffdsfds
  useEffect(() => {
    const fetchActiveClientsByDiscipline = async () => {
      const counts = data.reduce((acc, cliente) => {
        acc[cliente.disciplina] = (acc[cliente.disciplina] || 0) + 1;
        return acc;
      }, {});

      setActiveClientsByDiscipline(
        Object.entries(counts).map(([disciplinaActive, clienteActivo]) => ({
          disciplinaActive,
          clienteActivo,
        }))
      );
    };

    fetchActiveClientsByDiscipline();
  }, [data]);

  //2
  useEffect(() => {
    const fetchActiveClientsByDispGen = async () => {
      const counts = data.reduce((acc, cliente) => {
        if (!acc[cliente.disciplina]) {
          acc[cliente.disciplina] = { h: 0, m: 0 };
        }

        if (cliente.genero === "H") {
          acc[cliente.disciplina].h++;
        } else if (cliente.genero === "M") {
          acc[cliente.disciplina].m++;
        }
        return acc;
      }, {});

      setActiveClientsByDispGen(
        Object.entries(counts).map(([disciplina, { h, m }]) => ({
          disciplina,
          h,
          m,
        }))
      );
    };

    fetchActiveClientsByDispGen();
  }, [data]);

  //3
  useEffect(() => {
    const fetchClientsByDiscipline = async () => {
      const counts = data.reduce((acc, cliente) => {
        acc[cliente.disciplina] = (acc[cliente.disciplina] || 0) + 1;
        return acc;
      }, {});

      setClientsByDiscipline(
        Object.entries(counts).map(([disciplina, cliente]) => ({
          disciplina,
          cliente,
        }))
      );
    };

    fetchClientsByDiscipline();
  }, [data]);

  let isVisible = false
  let isGeneroVisible = false
  let isClientesActivosVisible = false
  let isMenActivosVisible = false
  let isWomenActivosVisible = false
  let isDiplMesVisible = false
  let isDiplEdadVisible = false
  let isClientesDVisible = false
  let isActivosDVisible = false
  let isClientesGDVisible = false

  
  switch (grafico) {
    case "X":
      isVisible = true
      break;
    case "Genero":
      isGeneroVisible = true
      break;
    case "Actividad":
      isClientesActivosVisible = true
      break;
    case "ActividadH":
      isMenActivosVisible = true
      break;
    case "ActividadM":
      isWomenActivosVisible = true
      break;
    case "DiplMes":
      isDiplMesVisible = true
      break;
    case "DiplEdad":
      isDiplEdadVisible = true
      break;
    case "ClientesD":
      isClientesDVisible = true
      break;
    case "ActivosD":
      isActivosDVisible = true
      break;
    case "ClientesGD":
      isClientesGDVisible = true
      break;
    default:
  }

  return (
    <StyledDynamicChart style={{
      height: isVisible ? '10rem' : (isGeneroVisible || isClientesActivosVisible ? '45rem' : '60rem'),
      maxHeight: isVisible ? '10rem' : (isGeneroVisible || isClientesActivosVisible ? '45rem' : '60rem')
    }}
    >
      <Heading as="h2" style={{padding:' 3.2rem'}}>Grafica {n}  </Heading>

      {isGeneroVisible && (
      <>
        <StyledSubHeading as="h3" >Género</StyledSubHeading>
        <ResponsiveContainer width="160%" height={400} >
          <PieChart >
            <Pie
              activeIndex={activeIndex}
              activeShape={renderActiveShape}
              data={datagen}
              cx="25%"
              cy="30%"
              innerRadius={60}
              outerRadius={80}
              fill= {isDarkMode? "#eeeee4": "#4b42d4"}
              dataKey="value"
              onMouseEnter={onPieEnter}
            />
          </PieChart>
        </ResponsiveContainer> </>
      )}

    {isClientesActivosVisible && (
      <>
        <StyledSubHeading as="h3" >Clientes Activos</StyledSubHeading>
        <ResponsiveContainer width="100%" height={400}>
          <PieChart width={400} height={400}>
            <Pie
              activeIndex={activeIndex1}
              activeShape={renderActiveShape}
              data={datas}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill= {isDarkMode? "#eeeee4": "#4b42d4"}
              dataKey="value"
              onMouseEnter={onPieEnter1}
            />
          </PieChart>
        </ResponsiveContainer> 
      </>
      )}
       
       
      {isMenActivosVisible && (
      <>
        <StyledSubHeading as="h3" >Hombres Activos</StyledSubHeading>
        <ResponsiveContainer width="160%" height={400} >
          <PieChart >
            <Pie
              activeIndex={activeIndex}
              activeShape={renderActiveShape}
              data={activeMen}
              cx="25%"
              cy="30%"
              innerRadius={60}
              outerRadius={80}
              fill= {isDarkMode? "#eeeee4": "#4b42d4"}
              dataKey="value"
              onMouseEnter={onPieEnter}
            />
          </PieChart>
        </ResponsiveContainer> </>
      )}

      
    {isWomenActivosVisible && (
      <>
        <StyledSubHeading as="h3" >Mujeres Activas</StyledSubHeading>
        <ResponsiveContainer width="160%" height={400} >
          <PieChart >
            <Pie
              activeIndex={activeIndex}
              activeShape={renderActiveShape}
              data={activeWomen}
              cx="25%"
              cy="30%"
              innerRadius={60}
              outerRadius={80}
              fill= {isDarkMode? "#eeeee4": "#4b42d4"}
              dataKey="value"
              onMouseEnter={onPieEnter}
            />
          </PieChart>
        </ResponsiveContainer> </>
      )}

       {isDiplMesVisible && (
      <>
          <StyledSubHeading as="h3">
        Diplomados Inscritos y Terminados por Mes
      </StyledSubHeading>
      <ResponsiveContainer height={300} width="100%">
        <AreaChart data={dataArea}>
          <XAxis
            dataKey="label"
            tick={{ fill: colors.text }}
            tickLine={{ stroke: colors.text }}
          />
          <YAxis />
          <CartesianGrid strokeDasharray="8" />
          <Tooltip contentStyle={{ backgroundColor: colors.background }} />
          <Area
            dataKey="numero_diplomados"
            type="monotone"
            stroke={colors.totalSales.stroke}
            fill={colors.totalSales.fill}
            strokeWidth={2}
            name="numero_diplomados"
            unit="#"
          />
          <Area
            dataKey="diplomados_terminados"
            type="monotone"
            stroke={colors.extrasSales.stroke}
            fill={colors.extrasSales.fill}
            strokeWidth={2}
            name="diplomados_terminados"
            unit="#"
          />
        </AreaChart>
      </ResponsiveContainer>
      </>
      )}
    

    {isDiplEdadVisible && (
      <>
        <StyledSubHeading as="h3">Diplomados Inscritos por Edad</StyledSubHeading>
      <ResponsiveContainer height={400} width="100%">
        <ScatterChart
          width={400}
          height={400}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="number" dataKey="x" name="Edad" unit="años" />
          <YAxis
            type="number"
            dataKey="y"
            name="Diplomados Inscritos"
            unit="Dipl."
          />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <Scatter name="A school" data={scatterData} fill="#8884d8">
            {scatterData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORSS[index % COLORSS.length]}
              />
            ))}
          </Scatter>
        </ScatterChart>
      </ResponsiveContainer>

      </>
      )}
      
      {isClientesDVisible && (
      <>
        <StyledSubHeading as="h3"> Número de Clientes por Disciplina</StyledSubHeading>
        <ResponsiveContainer height={400} width="100%">
          <BarChart
            height={300}
            data={clientsByDiscipline}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            barSize={20}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="disciplina" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="cliente" fill="#299DC6" name="Clientes" />
          </BarChart>
      </ResponsiveContainer>
      </>
      )}
    
    {isActivosDVisible && (
      <>
         <StyledSubHeading as="h3">
        Número de Clientes Activos por Disciplina
      </StyledSubHeading>
      <ResponsiveContainer height={400} width="100%">
        <BarChart
          height={300}
          data={activeClientsByDiscipline}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          barSize={25}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="disciplinaActive" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="clienteActivo" fill="#4b42d4" name="Clientes activos" />
        </BarChart>
      </ResponsiveContainer>
      </>
      )}

{isClientesGDVisible && (
      <>
        <StyledSubHeading as="h3">
        Número de Clientes por Género y Disciplina
      </StyledSubHeading>
      <ResponsiveContainer height={400} width="100%">
        <BarChart
          height={300}
          data={activeClientsByDispGen}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          barSize={20}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="disciplina" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="h" fill="#4b42d4" name="Hombres" />
          <Bar dataKey="m" fill="#28d4b7" name="Mujeres" />
        </BarChart>
      </ResponsiveContainer>
      </>
      )}
    </StyledDynamicChart>
  );
}

export default DynamicGraphs;
