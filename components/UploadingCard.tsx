import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function UploadingCard() {
  return (
    <div className="flex justify-center">
      <Card className="min-w-2xl">
        <CardContent className="">
          <Input type="file" id="images" className="" hidden accept="image/*" />
          <div className="flex">
            <Label htmlFor="images">Upload Your Photos</Label>
          </div>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
}

export default UploadingCard;
