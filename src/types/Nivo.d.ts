type LegendDirection = 'column' | 'row';
type LegendItemDirection = 'left-to-right' | 'right-to-left' | 'top-to-bottom' | 'bottom-to-top';
type SymbolShape = "square" | "circle" | "diamond" | "triangle"
type SymbolProps = {
    id: string | number;
    x: number;
    y: number;
    size: number;
    fill: string;
    opacity?: number | undefined;
    borderWidth?: number | undefined;
    borderColor?: string | undefined;
}

type EffectProps = {
    on: 'hover';
    style: Partial<{
        itemTextColor: string;
        itemBackground: string;
        itemOpacity: number;
        symbolSize: number;
        symbolBorderWidth: number;
        symbolBorderColor: string;
    }>;
  };

type CommonLegendProps = {
    data?: Datum[];
    direction: LegendDirection;
    padding?: number | Partial<Record<'top' | 'right' | 'bottom' | 'left', number>>;
    justify?: boolean;
    itemWidth: number;
    itemHeight: number;
    itemDirection?: LegendItemDirection;
    itemTextColor?: string;
    itemBackground?: string;
    itemOpacity?: number;
    itemsSpacing?: number;
    effects?: EffectProps[];
};


type LegendProps = {
    translateX?: number;
    translateY?: number;
    anchor: LegendAnchor;
    toggleSerie?: boolean;
} & CommonLegendProps & BoxLegendSymbolProps & Omit<InteractivityProps, 'toggleSerie'>;

type BoxLegendSymbolProps = Partial<{
    symbolShape: SymbolShape | React.FC<SymbolProps>;
    symbolSize: number;
    symbolSpacing: number;
    symbolBorderWidth: number;
    symbolBorderColor: string;
}>;

type InteractivityProps = Partial<Record<'onClick' | 'onMouseEnter' | 'onMouseLeave', (datum: Datum, event: React.MouseEvent<SVGRectElement>) => void> & {
    toggleSerie: (id: Datum['id']) => void;
}>;

type LegendAnchor = 'top' | 'top-right' | 'right' | 'bottom-right' | 'bottom' | 'bottom-left' | 'left' | 'top-left' | 'center';

type Datum = {
    id: string | number;
    label: string | number;
    hidden?: boolean;
    color?: string;
    fill?: string;
};