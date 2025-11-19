"use client";

import { toast } from "@/hooks/use-toast";
import { incrementViews } from "@/lib/actions/question.action";
import { useEffect } from "react";

const View = ({ questionId }: { questionId: string }) => {
  const handleIncrement = async () => {
    const result = await incrementViews({ questionId });

    if (!result.success) {
      toast({
        title: "Error",
        description: "Failed to increment view count.",
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    handleIncrement();
  }, []);

  return null;
};

export default View;