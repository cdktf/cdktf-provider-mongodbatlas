# `data_mongodbatlas_backup_compliance_policy`

Refer to the Terraform Registory for docs: [`data_mongodbatlas_backup_compliance_policy`](https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/data-sources/backup_compliance_policy).

# `dataMongodbatlasBackupCompliancePolicy` Submodule <a name="`dataMongodbatlasBackupCompliancePolicy` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasBackupCompliancePolicy <a name="DataMongodbatlasBackupCompliancePolicy" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/data-sources/backup_compliance_policy mongodbatlas_backup_compliance_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.Initializer"></a>

```typescript
import { dataMongodbatlasBackupCompliancePolicy } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy(scope: Construct, id: string, config: DataMongodbatlasBackupCompliancePolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyConfig">DataMongodbatlasBackupCompliancePolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyConfig">DataMongodbatlasBackupCompliancePolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.putOnDemandPolicyItem">putOnDemandPolicyItem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.putPolicyItemDaily">putPolicyItemDaily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.putPolicyItemHourly">putPolicyItemHourly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.putPolicyItemMonthly">putPolicyItemMonthly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.putPolicyItemWeekly">putPolicyItemWeekly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.resetOnDemandPolicyItem">resetOnDemandPolicyItem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.resetPolicyItemDaily">resetPolicyItemDaily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.resetPolicyItemHourly">resetPolicyItemHourly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.resetPolicyItemMonthly">resetPolicyItemMonthly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.resetPolicyItemWeekly">resetPolicyItemWeekly</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putOnDemandPolicyItem` <a name="putOnDemandPolicyItem" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.putOnDemandPolicyItem"></a>

```typescript
public putOnDemandPolicyItem(value: DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItem): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.putOnDemandPolicyItem.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItem">DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItem</a>

---

##### `putPolicyItemDaily` <a name="putPolicyItemDaily" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.putPolicyItemDaily"></a>

```typescript
public putPolicyItemDaily(value: DataMongodbatlasBackupCompliancePolicyPolicyItemDaily): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.putPolicyItemDaily.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDaily">DataMongodbatlasBackupCompliancePolicyPolicyItemDaily</a>

---

##### `putPolicyItemHourly` <a name="putPolicyItemHourly" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.putPolicyItemHourly"></a>

```typescript
public putPolicyItemHourly(value: DataMongodbatlasBackupCompliancePolicyPolicyItemHourly): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.putPolicyItemHourly.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourly">DataMongodbatlasBackupCompliancePolicyPolicyItemHourly</a>

---

##### `putPolicyItemMonthly` <a name="putPolicyItemMonthly" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.putPolicyItemMonthly"></a>

```typescript
public putPolicyItemMonthly(value: IResolvable | DataMongodbatlasBackupCompliancePolicyPolicyItemMonthly[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.putPolicyItemMonthly.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthly">DataMongodbatlasBackupCompliancePolicyPolicyItemMonthly</a>[]

---

##### `putPolicyItemWeekly` <a name="putPolicyItemWeekly" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.putPolicyItemWeekly"></a>

```typescript
public putPolicyItemWeekly(value: IResolvable | DataMongodbatlasBackupCompliancePolicyPolicyItemWeekly[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.putPolicyItemWeekly.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeekly">DataMongodbatlasBackupCompliancePolicyPolicyItemWeekly</a>[]

---

##### `resetId` <a name="resetId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOnDemandPolicyItem` <a name="resetOnDemandPolicyItem" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.resetOnDemandPolicyItem"></a>

```typescript
public resetOnDemandPolicyItem(): void
```

##### `resetPolicyItemDaily` <a name="resetPolicyItemDaily" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.resetPolicyItemDaily"></a>

```typescript
public resetPolicyItemDaily(): void
```

##### `resetPolicyItemHourly` <a name="resetPolicyItemHourly" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.resetPolicyItemHourly"></a>

```typescript
public resetPolicyItemHourly(): void
```

##### `resetPolicyItemMonthly` <a name="resetPolicyItemMonthly" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.resetPolicyItemMonthly"></a>

```typescript
public resetPolicyItemMonthly(): void
```

##### `resetPolicyItemWeekly` <a name="resetPolicyItemWeekly" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.resetPolicyItemWeekly"></a>

```typescript
public resetPolicyItemWeekly(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.isConstruct"></a>

```typescript
import { dataMongodbatlasBackupCompliancePolicy } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.isTerraformElement"></a>

```typescript
import { dataMongodbatlasBackupCompliancePolicy } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.isTerraformDataSource"></a>

```typescript
import { dataMongodbatlasBackupCompliancePolicy } from '@cdktf/provider-mongodbatlas'

dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.authorizedEmail">authorizedEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.copyProtectionEnabled">copyProtectionEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.encryptionAtRestEnabled">encryptionAtRestEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.onDemandPolicyItem">onDemandPolicyItem</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference">DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.pitEnabled">pitEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.policyItemDaily">policyItemDaily</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference">DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.policyItemHourly">policyItemHourly</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference">DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.policyItemMonthly">policyItemMonthly</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList">DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.policyItemWeekly">policyItemWeekly</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList">DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.restoreWindowDays">restoreWindowDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.updatedDate">updatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.updatedUser">updatedUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.onDemandPolicyItemInput">onDemandPolicyItemInput</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItem">DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.policyItemDailyInput">policyItemDailyInput</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDaily">DataMongodbatlasBackupCompliancePolicyPolicyItemDaily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.policyItemHourlyInput">policyItemHourlyInput</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourly">DataMongodbatlasBackupCompliancePolicyPolicyItemHourly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.policyItemMonthlyInput">policyItemMonthlyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthly">DataMongodbatlasBackupCompliancePolicyPolicyItemMonthly</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.policyItemWeeklyInput">policyItemWeeklyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeekly">DataMongodbatlasBackupCompliancePolicyPolicyItemWeekly</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `authorizedEmail`<sup>Required</sup> <a name="authorizedEmail" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.authorizedEmail"></a>

```typescript
public readonly authorizedEmail: string;
```

- *Type:* string

---

##### `copyProtectionEnabled`<sup>Required</sup> <a name="copyProtectionEnabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.copyProtectionEnabled"></a>

```typescript
public readonly copyProtectionEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `encryptionAtRestEnabled`<sup>Required</sup> <a name="encryptionAtRestEnabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.encryptionAtRestEnabled"></a>

```typescript
public readonly encryptionAtRestEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `onDemandPolicyItem`<sup>Required</sup> <a name="onDemandPolicyItem" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.onDemandPolicyItem"></a>

```typescript
public readonly onDemandPolicyItem: DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference">DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference</a>

---

##### `pitEnabled`<sup>Required</sup> <a name="pitEnabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.pitEnabled"></a>

```typescript
public readonly pitEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `policyItemDaily`<sup>Required</sup> <a name="policyItemDaily" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.policyItemDaily"></a>

```typescript
public readonly policyItemDaily: DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference">DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference</a>

---

##### `policyItemHourly`<sup>Required</sup> <a name="policyItemHourly" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.policyItemHourly"></a>

```typescript
public readonly policyItemHourly: DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference">DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference</a>

---

##### `policyItemMonthly`<sup>Required</sup> <a name="policyItemMonthly" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.policyItemMonthly"></a>

```typescript
public readonly policyItemMonthly: DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList">DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList</a>

---

##### `policyItemWeekly`<sup>Required</sup> <a name="policyItemWeekly" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.policyItemWeekly"></a>

```typescript
public readonly policyItemWeekly: DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList">DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList</a>

---

##### `restoreWindowDays`<sup>Required</sup> <a name="restoreWindowDays" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.restoreWindowDays"></a>

```typescript
public readonly restoreWindowDays: number;
```

- *Type:* number

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `updatedDate`<sup>Required</sup> <a name="updatedDate" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.updatedDate"></a>

```typescript
public readonly updatedDate: string;
```

- *Type:* string

---

##### `updatedUser`<sup>Required</sup> <a name="updatedUser" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.updatedUser"></a>

```typescript
public readonly updatedUser: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `onDemandPolicyItemInput`<sup>Optional</sup> <a name="onDemandPolicyItemInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.onDemandPolicyItemInput"></a>

```typescript
public readonly onDemandPolicyItemInput: DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItem;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItem">DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItem</a>

---

##### `policyItemDailyInput`<sup>Optional</sup> <a name="policyItemDailyInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.policyItemDailyInput"></a>

```typescript
public readonly policyItemDailyInput: DataMongodbatlasBackupCompliancePolicyPolicyItemDaily;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDaily">DataMongodbatlasBackupCompliancePolicyPolicyItemDaily</a>

---

##### `policyItemHourlyInput`<sup>Optional</sup> <a name="policyItemHourlyInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.policyItemHourlyInput"></a>

```typescript
public readonly policyItemHourlyInput: DataMongodbatlasBackupCompliancePolicyPolicyItemHourly;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourly">DataMongodbatlasBackupCompliancePolicyPolicyItemHourly</a>

---

##### `policyItemMonthlyInput`<sup>Optional</sup> <a name="policyItemMonthlyInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.policyItemMonthlyInput"></a>

```typescript
public readonly policyItemMonthlyInput: IResolvable | DataMongodbatlasBackupCompliancePolicyPolicyItemMonthly[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthly">DataMongodbatlasBackupCompliancePolicyPolicyItemMonthly</a>[]

---

##### `policyItemWeeklyInput`<sup>Optional</sup> <a name="policyItemWeeklyInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.policyItemWeeklyInput"></a>

```typescript
public readonly policyItemWeeklyInput: IResolvable | DataMongodbatlasBackupCompliancePolicyPolicyItemWeekly[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeekly">DataMongodbatlasBackupCompliancePolicyPolicyItemWeekly</a>[]

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasBackupCompliancePolicyConfig <a name="DataMongodbatlasBackupCompliancePolicyConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyConfig.Initializer"></a>

```typescript
import { dataMongodbatlasBackupCompliancePolicy } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasBackupCompliancePolicyConfig: dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyConfig.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/data-sources/backup_compliance_policy#project_id DataMongodbatlasBackupCompliancePolicy#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/data-sources/backup_compliance_policy#id DataMongodbatlasBackupCompliancePolicy#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyConfig.property.onDemandPolicyItem">onDemandPolicyItem</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItem">DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItem</a></code> | on_demand_policy_item block. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyConfig.property.policyItemDaily">policyItemDaily</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDaily">DataMongodbatlasBackupCompliancePolicyPolicyItemDaily</a></code> | policy_item_daily block. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyConfig.property.policyItemHourly">policyItemHourly</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourly">DataMongodbatlasBackupCompliancePolicyPolicyItemHourly</a></code> | policy_item_hourly block. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyConfig.property.policyItemMonthly">policyItemMonthly</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthly">DataMongodbatlasBackupCompliancePolicyPolicyItemMonthly</a>[]</code> | policy_item_monthly block. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyConfig.property.policyItemWeekly">policyItemWeekly</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeekly">DataMongodbatlasBackupCompliancePolicyPolicyItemWeekly</a>[]</code> | policy_item_weekly block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/data-sources/backup_compliance_policy#project_id DataMongodbatlasBackupCompliancePolicy#project_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/data-sources/backup_compliance_policy#id DataMongodbatlasBackupCompliancePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `onDemandPolicyItem`<sup>Optional</sup> <a name="onDemandPolicyItem" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyConfig.property.onDemandPolicyItem"></a>

```typescript
public readonly onDemandPolicyItem: DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItem;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItem">DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItem</a>

on_demand_policy_item block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/data-sources/backup_compliance_policy#on_demand_policy_item DataMongodbatlasBackupCompliancePolicy#on_demand_policy_item}

---

##### `policyItemDaily`<sup>Optional</sup> <a name="policyItemDaily" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyConfig.property.policyItemDaily"></a>

```typescript
public readonly policyItemDaily: DataMongodbatlasBackupCompliancePolicyPolicyItemDaily;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDaily">DataMongodbatlasBackupCompliancePolicyPolicyItemDaily</a>

policy_item_daily block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/data-sources/backup_compliance_policy#policy_item_daily DataMongodbatlasBackupCompliancePolicy#policy_item_daily}

---

##### `policyItemHourly`<sup>Optional</sup> <a name="policyItemHourly" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyConfig.property.policyItemHourly"></a>

```typescript
public readonly policyItemHourly: DataMongodbatlasBackupCompliancePolicyPolicyItemHourly;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourly">DataMongodbatlasBackupCompliancePolicyPolicyItemHourly</a>

policy_item_hourly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/data-sources/backup_compliance_policy#policy_item_hourly DataMongodbatlasBackupCompliancePolicy#policy_item_hourly}

---

##### `policyItemMonthly`<sup>Optional</sup> <a name="policyItemMonthly" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyConfig.property.policyItemMonthly"></a>

```typescript
public readonly policyItemMonthly: IResolvable | DataMongodbatlasBackupCompliancePolicyPolicyItemMonthly[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthly">DataMongodbatlasBackupCompliancePolicyPolicyItemMonthly</a>[]

policy_item_monthly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/data-sources/backup_compliance_policy#policy_item_monthly DataMongodbatlasBackupCompliancePolicy#policy_item_monthly}

---

##### `policyItemWeekly`<sup>Optional</sup> <a name="policyItemWeekly" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyConfig.property.policyItemWeekly"></a>

```typescript
public readonly policyItemWeekly: IResolvable | DataMongodbatlasBackupCompliancePolicyPolicyItemWeekly[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeekly">DataMongodbatlasBackupCompliancePolicyPolicyItemWeekly</a>[]

policy_item_weekly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/data-sources/backup_compliance_policy#policy_item_weekly DataMongodbatlasBackupCompliancePolicy#policy_item_weekly}

---

### DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItem <a name="DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItem" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItem"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItem.Initializer"></a>

```typescript
import { dataMongodbatlasBackupCompliancePolicy } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasBackupCompliancePolicyOnDemandPolicyItem: dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItem = { ... }
```


### DataMongodbatlasBackupCompliancePolicyPolicyItemDaily <a name="DataMongodbatlasBackupCompliancePolicyPolicyItemDaily" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDaily"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDaily.Initializer"></a>

```typescript
import { dataMongodbatlasBackupCompliancePolicy } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasBackupCompliancePolicyPolicyItemDaily: dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDaily = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDaily.property.frequencyInterval">frequencyInterval</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/data-sources/backup_compliance_policy#frequency_interval DataMongodbatlasBackupCompliancePolicy#frequency_interval}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDaily.property.retentionUnit">retentionUnit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/data-sources/backup_compliance_policy#retention_unit DataMongodbatlasBackupCompliancePolicy#retention_unit}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDaily.property.retentionValue">retentionValue</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/data-sources/backup_compliance_policy#retention_value DataMongodbatlasBackupCompliancePolicy#retention_value}. |

---

##### `frequencyInterval`<sup>Required</sup> <a name="frequencyInterval" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDaily.property.frequencyInterval"></a>

```typescript
public readonly frequencyInterval: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/data-sources/backup_compliance_policy#frequency_interval DataMongodbatlasBackupCompliancePolicy#frequency_interval}.

---

##### `retentionUnit`<sup>Required</sup> <a name="retentionUnit" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDaily.property.retentionUnit"></a>

```typescript
public readonly retentionUnit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/data-sources/backup_compliance_policy#retention_unit DataMongodbatlasBackupCompliancePolicy#retention_unit}.

---

##### `retentionValue`<sup>Required</sup> <a name="retentionValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDaily.property.retentionValue"></a>

```typescript
public readonly retentionValue: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/data-sources/backup_compliance_policy#retention_value DataMongodbatlasBackupCompliancePolicy#retention_value}.

---

### DataMongodbatlasBackupCompliancePolicyPolicyItemHourly <a name="DataMongodbatlasBackupCompliancePolicyPolicyItemHourly" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourly.Initializer"></a>

```typescript
import { dataMongodbatlasBackupCompliancePolicy } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasBackupCompliancePolicyPolicyItemHourly: dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourly = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourly.property.frequencyInterval">frequencyInterval</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/data-sources/backup_compliance_policy#frequency_interval DataMongodbatlasBackupCompliancePolicy#frequency_interval}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourly.property.retentionUnit">retentionUnit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/data-sources/backup_compliance_policy#retention_unit DataMongodbatlasBackupCompliancePolicy#retention_unit}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourly.property.retentionValue">retentionValue</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/data-sources/backup_compliance_policy#retention_value DataMongodbatlasBackupCompliancePolicy#retention_value}. |

---

##### `frequencyInterval`<sup>Required</sup> <a name="frequencyInterval" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourly.property.frequencyInterval"></a>

```typescript
public readonly frequencyInterval: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/data-sources/backup_compliance_policy#frequency_interval DataMongodbatlasBackupCompliancePolicy#frequency_interval}.

---

##### `retentionUnit`<sup>Required</sup> <a name="retentionUnit" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourly.property.retentionUnit"></a>

```typescript
public readonly retentionUnit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/data-sources/backup_compliance_policy#retention_unit DataMongodbatlasBackupCompliancePolicy#retention_unit}.

---

##### `retentionValue`<sup>Required</sup> <a name="retentionValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourly.property.retentionValue"></a>

```typescript
public readonly retentionValue: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/data-sources/backup_compliance_policy#retention_value DataMongodbatlasBackupCompliancePolicy#retention_value}.

---

### DataMongodbatlasBackupCompliancePolicyPolicyItemMonthly <a name="DataMongodbatlasBackupCompliancePolicyPolicyItemMonthly" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthly.Initializer"></a>

```typescript
import { dataMongodbatlasBackupCompliancePolicy } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasBackupCompliancePolicyPolicyItemMonthly: dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthly = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthly.property.frequencyInterval">frequencyInterval</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/data-sources/backup_compliance_policy#frequency_interval DataMongodbatlasBackupCompliancePolicy#frequency_interval}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthly.property.retentionUnit">retentionUnit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/data-sources/backup_compliance_policy#retention_unit DataMongodbatlasBackupCompliancePolicy#retention_unit}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthly.property.retentionValue">retentionValue</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/data-sources/backup_compliance_policy#retention_value DataMongodbatlasBackupCompliancePolicy#retention_value}. |

---

##### `frequencyInterval`<sup>Required</sup> <a name="frequencyInterval" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthly.property.frequencyInterval"></a>

```typescript
public readonly frequencyInterval: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/data-sources/backup_compliance_policy#frequency_interval DataMongodbatlasBackupCompliancePolicy#frequency_interval}.

---

##### `retentionUnit`<sup>Required</sup> <a name="retentionUnit" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthly.property.retentionUnit"></a>

```typescript
public readonly retentionUnit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/data-sources/backup_compliance_policy#retention_unit DataMongodbatlasBackupCompliancePolicy#retention_unit}.

---

##### `retentionValue`<sup>Required</sup> <a name="retentionValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthly.property.retentionValue"></a>

```typescript
public readonly retentionValue: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/data-sources/backup_compliance_policy#retention_value DataMongodbatlasBackupCompliancePolicy#retention_value}.

---

### DataMongodbatlasBackupCompliancePolicyPolicyItemWeekly <a name="DataMongodbatlasBackupCompliancePolicyPolicyItemWeekly" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeekly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeekly.Initializer"></a>

```typescript
import { dataMongodbatlasBackupCompliancePolicy } from '@cdktf/provider-mongodbatlas'

const dataMongodbatlasBackupCompliancePolicyPolicyItemWeekly: dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeekly = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeekly.property.frequencyInterval">frequencyInterval</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/data-sources/backup_compliance_policy#frequency_interval DataMongodbatlasBackupCompliancePolicy#frequency_interval}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeekly.property.retentionUnit">retentionUnit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/data-sources/backup_compliance_policy#retention_unit DataMongodbatlasBackupCompliancePolicy#retention_unit}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeekly.property.retentionValue">retentionValue</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/data-sources/backup_compliance_policy#retention_value DataMongodbatlasBackupCompliancePolicy#retention_value}. |

---

##### `frequencyInterval`<sup>Required</sup> <a name="frequencyInterval" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeekly.property.frequencyInterval"></a>

```typescript
public readonly frequencyInterval: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/data-sources/backup_compliance_policy#frequency_interval DataMongodbatlasBackupCompliancePolicy#frequency_interval}.

---

##### `retentionUnit`<sup>Required</sup> <a name="retentionUnit" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeekly.property.retentionUnit"></a>

```typescript
public readonly retentionUnit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/data-sources/backup_compliance_policy#retention_unit DataMongodbatlasBackupCompliancePolicy#retention_unit}.

---

##### `retentionValue`<sup>Required</sup> <a name="retentionValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeekly.property.retentionValue"></a>

```typescript
public readonly retentionValue: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.11.0/docs/data-sources/backup_compliance_policy#retention_value DataMongodbatlasBackupCompliancePolicy#retention_value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference <a name="DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasBackupCompliancePolicy } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.property.frequencyInterval">frequencyInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.property.frequencyType">frequencyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.property.retentionUnit">retentionUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.property.retentionValue">retentionValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItem">DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItem</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `frequencyInterval`<sup>Required</sup> <a name="frequencyInterval" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.property.frequencyInterval"></a>

```typescript
public readonly frequencyInterval: number;
```

- *Type:* number

---

##### `frequencyType`<sup>Required</sup> <a name="frequencyType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.property.frequencyType"></a>

```typescript
public readonly frequencyType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `retentionUnit`<sup>Required</sup> <a name="retentionUnit" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.property.retentionUnit"></a>

```typescript
public readonly retentionUnit: string;
```

- *Type:* string

---

##### `retentionValue`<sup>Required</sup> <a name="retentionValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.property.retentionValue"></a>

```typescript
public readonly retentionValue: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItemOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItem;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItem">DataMongodbatlasBackupCompliancePolicyOnDemandPolicyItem</a>

---


### DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference <a name="DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasBackupCompliancePolicy } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.property.frequencyType">frequencyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.property.frequencyIntervalInput">frequencyIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.property.retentionUnitInput">retentionUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.property.retentionValueInput">retentionValueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.property.frequencyInterval">frequencyInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.property.retentionUnit">retentionUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.property.retentionValue">retentionValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDaily">DataMongodbatlasBackupCompliancePolicyPolicyItemDaily</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `frequencyType`<sup>Required</sup> <a name="frequencyType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.property.frequencyType"></a>

```typescript
public readonly frequencyType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `frequencyIntervalInput`<sup>Optional</sup> <a name="frequencyIntervalInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.property.frequencyIntervalInput"></a>

```typescript
public readonly frequencyIntervalInput: number;
```

- *Type:* number

---

##### `retentionUnitInput`<sup>Optional</sup> <a name="retentionUnitInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.property.retentionUnitInput"></a>

```typescript
public readonly retentionUnitInput: string;
```

- *Type:* string

---

##### `retentionValueInput`<sup>Optional</sup> <a name="retentionValueInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.property.retentionValueInput"></a>

```typescript
public readonly retentionValueInput: number;
```

- *Type:* number

---

##### `frequencyInterval`<sup>Required</sup> <a name="frequencyInterval" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.property.frequencyInterval"></a>

```typescript
public readonly frequencyInterval: number;
```

- *Type:* number

---

##### `retentionUnit`<sup>Required</sup> <a name="retentionUnit" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.property.retentionUnit"></a>

```typescript
public readonly retentionUnit: string;
```

- *Type:* string

---

##### `retentionValue`<sup>Required</sup> <a name="retentionValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.property.retentionValue"></a>

```typescript
public readonly retentionValue: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDailyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasBackupCompliancePolicyPolicyItemDaily;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemDaily">DataMongodbatlasBackupCompliancePolicyPolicyItemDaily</a>

---


### DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference <a name="DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasBackupCompliancePolicy } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.property.frequencyType">frequencyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.property.frequencyIntervalInput">frequencyIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.property.retentionUnitInput">retentionUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.property.retentionValueInput">retentionValueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.property.frequencyInterval">frequencyInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.property.retentionUnit">retentionUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.property.retentionValue">retentionValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourly">DataMongodbatlasBackupCompliancePolicyPolicyItemHourly</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `frequencyType`<sup>Required</sup> <a name="frequencyType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.property.frequencyType"></a>

```typescript
public readonly frequencyType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `frequencyIntervalInput`<sup>Optional</sup> <a name="frequencyIntervalInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.property.frequencyIntervalInput"></a>

```typescript
public readonly frequencyIntervalInput: number;
```

- *Type:* number

---

##### `retentionUnitInput`<sup>Optional</sup> <a name="retentionUnitInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.property.retentionUnitInput"></a>

```typescript
public readonly retentionUnitInput: string;
```

- *Type:* string

---

##### `retentionValueInput`<sup>Optional</sup> <a name="retentionValueInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.property.retentionValueInput"></a>

```typescript
public readonly retentionValueInput: number;
```

- *Type:* number

---

##### `frequencyInterval`<sup>Required</sup> <a name="frequencyInterval" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.property.frequencyInterval"></a>

```typescript
public readonly frequencyInterval: number;
```

- *Type:* number

---

##### `retentionUnit`<sup>Required</sup> <a name="retentionUnit" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.property.retentionUnit"></a>

```typescript
public readonly retentionUnit: string;
```

- *Type:* string

---

##### `retentionValue`<sup>Required</sup> <a name="retentionValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.property.retentionValue"></a>

```typescript
public readonly retentionValue: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourlyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataMongodbatlasBackupCompliancePolicyPolicyItemHourly;
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemHourly">DataMongodbatlasBackupCompliancePolicyPolicyItemHourly</a>

---


### DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList <a name="DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList.Initializer"></a>

```typescript
import { dataMongodbatlasBackupCompliancePolicy } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList.get"></a>

```typescript
public get(index: number): DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthly">DataMongodbatlasBackupCompliancePolicyPolicyItemMonthly</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataMongodbatlasBackupCompliancePolicyPolicyItemMonthly[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthly">DataMongodbatlasBackupCompliancePolicyPolicyItemMonthly</a>[]

---


### DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference <a name="DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasBackupCompliancePolicy } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.property.frequencyType">frequencyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.property.frequencyIntervalInput">frequencyIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.property.retentionUnitInput">retentionUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.property.retentionValueInput">retentionValueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.property.frequencyInterval">frequencyInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.property.retentionUnit">retentionUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.property.retentionValue">retentionValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthly">DataMongodbatlasBackupCompliancePolicyPolicyItemMonthly</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `frequencyType`<sup>Required</sup> <a name="frequencyType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.property.frequencyType"></a>

```typescript
public readonly frequencyType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `frequencyIntervalInput`<sup>Optional</sup> <a name="frequencyIntervalInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.property.frequencyIntervalInput"></a>

```typescript
public readonly frequencyIntervalInput: number;
```

- *Type:* number

---

##### `retentionUnitInput`<sup>Optional</sup> <a name="retentionUnitInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.property.retentionUnitInput"></a>

```typescript
public readonly retentionUnitInput: string;
```

- *Type:* string

---

##### `retentionValueInput`<sup>Optional</sup> <a name="retentionValueInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.property.retentionValueInput"></a>

```typescript
public readonly retentionValueInput: number;
```

- *Type:* number

---

##### `frequencyInterval`<sup>Required</sup> <a name="frequencyInterval" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.property.frequencyInterval"></a>

```typescript
public readonly frequencyInterval: number;
```

- *Type:* number

---

##### `retentionUnit`<sup>Required</sup> <a name="retentionUnit" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.property.retentionUnit"></a>

```typescript
public readonly retentionUnit: string;
```

- *Type:* string

---

##### `retentionValue`<sup>Required</sup> <a name="retentionValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.property.retentionValue"></a>

```typescript
public readonly retentionValue: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthlyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataMongodbatlasBackupCompliancePolicyPolicyItemMonthly;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemMonthly">DataMongodbatlasBackupCompliancePolicyPolicyItemMonthly</a>

---


### DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList <a name="DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList.Initializer"></a>

```typescript
import { dataMongodbatlasBackupCompliancePolicy } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList.get"></a>

```typescript
public get(index: number): DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeekly">DataMongodbatlasBackupCompliancePolicyPolicyItemWeekly</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataMongodbatlasBackupCompliancePolicyPolicyItemWeekly[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeekly">DataMongodbatlasBackupCompliancePolicyPolicyItemWeekly</a>[]

---


### DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference <a name="DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.Initializer"></a>

```typescript
import { dataMongodbatlasBackupCompliancePolicy } from '@cdktf/provider-mongodbatlas'

new dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.property.frequencyType">frequencyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.property.frequencyIntervalInput">frequencyIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.property.retentionUnitInput">retentionUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.property.retentionValueInput">retentionValueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.property.frequencyInterval">frequencyInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.property.retentionUnit">retentionUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.property.retentionValue">retentionValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeekly">DataMongodbatlasBackupCompliancePolicyPolicyItemWeekly</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `frequencyType`<sup>Required</sup> <a name="frequencyType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.property.frequencyType"></a>

```typescript
public readonly frequencyType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `frequencyIntervalInput`<sup>Optional</sup> <a name="frequencyIntervalInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.property.frequencyIntervalInput"></a>

```typescript
public readonly frequencyIntervalInput: number;
```

- *Type:* number

---

##### `retentionUnitInput`<sup>Optional</sup> <a name="retentionUnitInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.property.retentionUnitInput"></a>

```typescript
public readonly retentionUnitInput: string;
```

- *Type:* string

---

##### `retentionValueInput`<sup>Optional</sup> <a name="retentionValueInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.property.retentionValueInput"></a>

```typescript
public readonly retentionValueInput: number;
```

- *Type:* number

---

##### `frequencyInterval`<sup>Required</sup> <a name="frequencyInterval" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.property.frequencyInterval"></a>

```typescript
public readonly frequencyInterval: number;
```

- *Type:* number

---

##### `retentionUnit`<sup>Required</sup> <a name="retentionUnit" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.property.retentionUnit"></a>

```typescript
public readonly retentionUnit: string;
```

- *Type:* string

---

##### `retentionValue`<sup>Required</sup> <a name="retentionValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.property.retentionValue"></a>

```typescript
public readonly retentionValue: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeeklyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataMongodbatlasBackupCompliancePolicyPolicyItemWeekly;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasBackupCompliancePolicy.DataMongodbatlasBackupCompliancePolicyPolicyItemWeekly">DataMongodbatlasBackupCompliancePolicyPolicyItemWeekly</a>

---



