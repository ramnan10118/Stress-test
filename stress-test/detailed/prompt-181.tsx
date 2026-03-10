import { useState } from "react";
import { Typography } from "@acko/typography";
import { Card } from "@acko/card";
import { Badge } from "@acko/badge";
import { TextInput } from "@acko/text-input";
import { Search, Clock, User } from "lucide-react";

interface Article {
  id: string;
  category: string;
  categoryColor: "purple" | "green" | "blue" | "orange" | "pink" | "gray";
  title: string;
  excerpt: string;
  author: string;
  readTime: string;
}

const articles: Article[] = [
  {
    id: "1",
    category: "Car Insurance",
    categoryColor: "purple",
    title: "What does comprehensive car insurance actually cover?",
    excerpt: "A clear breakdown of what's included in a comprehensive policy — and what isn't. No jargon, just plain answers.",
    author: "Priya Mehta",
    readTime: "4 min read",
  },
  {
    id: "2",
    category: "Health",
    categoryColor: "green",
    title: "How to choose the right health insurance for your family",
    excerpt: "Picking a family health plan can feel overwhelming. Here's a simple framework to help you decide.",
    author: "Rahul Sharma",
    readTime: "6 min read",
  },
  {
    id: "3",
    category: "Claims",
    categoryColor: "orange",
    title: "Filing a car insurance claim: step-by-step guide",
    excerpt: "What to do right after an accident, which documents you need, and how to track your claim status.",
    author: "Ankit Verma",
    readTime: "5 min read",
  },
  {
    id: "4",
    category: "Travel",
    categoryColor: "blue",
    title: "Do you really need travel insurance for domestic trips?",
    excerpt: "Most people skip travel insurance for short trips. Here's why that might be a costly mistake.",
    author: "Sneha Iyer",
    readTime: "3 min read",
  },
  {
    id: "5",
    category: "Tips",
    categoryColor: "pink",
    title: "5 ways to lower your car insurance premium",
    excerpt: "Simple, practical steps you can take today to reduce what you pay — without reducing coverage.",
    author: "Vikram Das",
    readTime: "4 min read",
  },
  {
    id: "6",
    category: "Health",
    categoryColor: "green",
    title: "Understanding waiting periods in health insurance",
    excerpt: "Why can't you claim immediately after buying a policy? Here's what waiting periods mean for you.",
    author: "Meera Nair",
    readTime: "5 min read",
  },
];

export default function Prompt181() {
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = articles.filter(
    (a) =>
      a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p181-root">
      <style>{`
        .p181-root {
          min-height: 100vh;
          background: var(--color-surface);
        }

        .p181-container {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding-inline: var(--space-4);
        }

        @media (min-width: 768px) {
          .p181-container {
            padding-inline: var(--space-8);
          }
        }

        @media (min-width: 1024px) {
          .p181-container {
            padding-inline: var(--space-10);
          }
        }

        .p181-header {
          padding-top: var(--space-12);
          padding-bottom: var(--space-8);
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
          text-wrap: balance;
        }

        .p181-search {
          padding-bottom: var(--space-8);
          max-width: 480px;
        }

        .p181-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-4);
          padding-bottom: calc(var(--space-12) + env(safe-area-inset-bottom));
        }

        @media (min-width: 768px) {
          .p181-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .p181-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .p181-card-inner {
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
          height: 100%;
        }

        .p181-card-body {
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
          flex: 1;
        }

        .p181-card-meta {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          margin-top: auto;
          padding-top: var(--space-3);
        }

        .p181-meta-item {
          display: flex;
          align-items: center;
          gap: var(--space-1);
        }

        .p181-meta-dot {
          width: var(--scale-4);
          height: var(--scale-4);
          border-radius: var(--radius-full);
          background: var(--color-border);
          flex-shrink: 0;
        }

        .p181-empty {
          grid-column: 1 / -1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-2);
          padding-block: var(--space-12);
        }
      `}</style>

      {/* Page header */}
      <div className="p181-container">
        <div className="p181-header">
          <Typography variant="display-sm" weight="bold" as="h1">
            Insurance explained simply
          </Typography>
          <Typography variant="body-lg" color="muted">
            Clear answers to common insurance questions — no jargon, no fine print tricks.
          </Typography>
        </div>
      </div>

      {/* Search */}
      <div className="p181-container">
        <div className="p181-search">
          <TextInput
            label="Search articles"
            placeholder="Search by topic or keyword..."
            value={searchQuery}
            onChange={setSearchQuery}
            type="search"
            size="lg"
            iconLeft={<Search size={18} />}
          />
        </div>
      </div>

      {/* Article grid */}
      <div className="p181-container">
        <div className="p181-grid">
          {filtered.map((article) => (
            <Card key={article.id} padding="md">
              <div className="p181-card-inner">
                <div>
                  <Badge variant="outline" color={article.categoryColor} size="sm">
                    {article.category}
                  </Badge>
                </div>

                <div className="p181-card-body">
                  <Typography variant="heading-sm" weight="semibold">
                    {article.title}
                  </Typography>
                  <Typography variant="body-sm" color="muted">
                    {article.excerpt}
                  </Typography>
                </div>

                <div className="p181-card-meta">
                  <div className="p181-meta-item">
                    <User size={14} color="var(--color-text-secondary)" aria-hidden="true" />
                    <Typography variant="caption" color="muted">
                      {article.author}
                    </Typography>
                  </div>
                  <div className="p181-meta-dot" aria-hidden="true" />
                  <div className="p181-meta-item">
                    <Clock size={14} color="var(--color-text-secondary)" aria-hidden="true" />
                    <Typography variant="caption" color="muted">
                      {article.readTime}
                    </Typography>
                  </div>
                </div>
              </div>
            </Card>
          ))}

          {filtered.length === 0 && (
            <div className="p181-empty">
              <Typography variant="heading-md" weight="semibold">
                No articles found
              </Typography>
              <Typography variant="body-md" color="muted">
                Try a different search term.
              </Typography>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
