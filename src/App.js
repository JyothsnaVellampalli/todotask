import './App.css';
import PriceCard from './components/PriceCard';
function App() {

  let data=[
    {
      product:'FREE',
      price:0,
      users:"Single User",
      usersEnabled:true,
      storage:"5GB storage",
      storageEnabled:true,
      publicprojects:"Unlimited Public Projects",
      publicprojectsEnabled:true,
      communityaccess:"Community Access",
      communityaccessEnabled:true,
      privateprojects:"Unlimited Private Projects",
      privateprojectsEnabled:false,
      phonesupport:"Dedicated phone support",
      phonesupportEnabled:false,
      subdomain:"Free Subdomain",
      subdomainEnabled:false,
      reports:"Monthly Satus Reports",
      reportsEnabled:false
    },
    {
      product:'PLUS',
      price:9,
      users:"5 Users",
      usersEnabled:true,
      storage:"50GB storage",
      storageEnabled:true,
      publicprojects:"Unlimited Public Projects",
      publicprojectsEnabled:true,
      communityaccess:"Community Access",
      communityaccessEnabled:true,
      privateprojects:"Unlimited Private Projects",
      privateprojectsEnabled:true,
      phonesupport:"Dedicated phone support",
      phonesupportEnabled:true,
      subdomain:"Free Subdomain",
      subdomainEnabled:true,
      reports:"Monthly Satus Reports",
      reportsEnabled:false

    },
    {
    product:'PRO',
    price:49,
    users:"Unlimited Users",
    usersEnabled:true,
    storage:"150GB storage",
    storageEnabled:true,
    publicprojects:"Unlimited Public Projects",
    publicprojectsEnabled:true,
    communityaccess:"Community Access",
    communityaccessEnabled:true,
    privateprojects:"Unlimited Private Projects",
    privateprojectsEnabled:true,
    phonesupport:"Dedicated phone support",
    phonesupportEnabled:true,
    subdomain:"Free Subdomain",
    subdomainEnabled:true,
    reports:"Monthly Satus Reports",
    reportsEnabled:true
   }
  ];
  return <>
    <section className="pricing py-5">
  <div className="container">
    <div className="row">
      {/* <PriceCard data={data[0]}/> */}
      {
     data.map((b)=>{
       return <PriceCard data={b}/>
     })
    }
      
    </div>
  </div>
</section>
  </> ;
}

export default App;
