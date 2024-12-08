import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select";
import { Navbar } from "@/components";

const GroupsPage = () => {
  const groups = [
    { name: "Team Alpha", description: "For students interested in mathematics and economics", status: "Member" },
    { name: "Accounting Students", description: "For students interested in Accounting and Finance", status: "Join" },
  ];

  return (
    <div>
       <nav className=" bg-primary " >
      <Navbar/>
      </nav>
      <div className="p-6">     
      <Select >
        <SelectTrigger>All groups</SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All groups</SelectItem>
          <SelectItem value="math">Mathematics</SelectItem>
          <SelectItem value="physics">Physics</SelectItem>
        </SelectContent>
      </Select>

      {/* Group Cards */}
      <div className="mt-4 grid grid-cols-1 gap-4">
        {groups.map((group) => (
          <Card key={group.name}>
            <CardHeader>
              <CardTitle>{group.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{group.description}</p>
            </CardContent>
            <CardFooter>
              <Button variant={group.status === "Member" ? "default" : "outline"}>
                {group.status}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      </div>
    </div>
  );
};

export default GroupsPage;
