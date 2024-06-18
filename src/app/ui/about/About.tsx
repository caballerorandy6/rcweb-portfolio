import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import AboutIcon from "../Icons/AboutIcon";

export default function About() {
  return (
    <div className="col-span-10 border-2 rounded-lg border-gurkha/20 border-opacity-40 bg-dune/40 shadow-md">
      <Card>
        <CardHeader>
          <CardTitle>
            <Badge variant="gold" className="mb-4">
              <AboutIcon />
              About Me
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent></CardContent>
      </Card>
    </div>
  );
}
