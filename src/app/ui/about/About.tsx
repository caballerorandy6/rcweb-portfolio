import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import AboutIcon from "../Icons/AboutIcon";

export default function About() {
  return (
    <div className="w-4/12 border-2 rounded-lg border-gurkha/20 border-opacity-40 bg-dune/40 shadow-md">
      <Card>
        <CardHeader>
          <CardTitle>
            <Badge variant="gold" className="mb-4">
              About
            </Badge>
          </CardTitle>
        </CardHeader>

        <CardContent className="relative flex flex-wrap justify-center items-center gap-4 mt-2 hover:blur-lg hover:opacity-80 transition-all hover:cursor-pointer">
          <AboutIcon />
        </CardContent>
      </Card>
    </div>
  );
}
