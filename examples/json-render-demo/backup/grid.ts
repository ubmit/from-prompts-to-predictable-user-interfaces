// on @lib/catalog.ts
// Grid: {
//   props: z.object({
//     columns: z.number().min(1).max(4).default(2),
//   }),
//   hasChildren: true,
// },

// on @/components/registy.ts
// Grid: ({ element, children }) => {
//    return (
//      <div
//        className="grid gap-4"
//        style={{
//          gridTemplateColumns: `repeat(${element.props.columns}, minmax(0, 1fr))`,
//        }}
//      >
//        {children}
//      </div>
//    );
//  },
