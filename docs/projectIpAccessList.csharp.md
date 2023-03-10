# `projectIpAccessList` Submodule <a name="`projectIpAccessList` Submodule" id="@cdktf/provider-mongodbatlas.projectIpAccessList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectIpAccessList <a name="ProjectIpAccessList" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList"></a>

Represents a {@link https://www.terraform.io/docs/providers/mongodbatlas/r/project_ip_access_list mongodbatlas_project_ip_access_list}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new ProjectIpAccessList(Construct Scope, string Id, ProjectIpAccessListConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListConfig">ProjectIpAccessListConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListConfig">ProjectIpAccessListConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.resetAwsSecurityGroup">ResetAwsSecurityGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.resetCidrBlock">ResetCidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.resetIpAddress">ResetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.putTimeouts"></a>

```csharp
private void PutTimeouts(ProjectIpAccessListTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListTimeouts">ProjectIpAccessListTimeouts</a>

---

##### `ResetAwsSecurityGroup` <a name="ResetAwsSecurityGroup" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.resetAwsSecurityGroup"></a>

```csharp
private void ResetAwsSecurityGroup()
```

##### `ResetCidrBlock` <a name="ResetCidrBlock" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.resetCidrBlock"></a>

```csharp
private void ResetCidrBlock()
```

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIpAddress` <a name="ResetIpAddress" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.resetIpAddress"></a>

```csharp
private void ResetIpAddress()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

ProjectIpAccessList.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

ProjectIpAccessList.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

ProjectIpAccessList.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListTimeoutsOutputReference">ProjectIpAccessListTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.property.awsSecurityGroupInput">AwsSecurityGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.property.cidrBlockInput">CidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.property.ipAddressInput">IpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.property.awsSecurityGroup">AwsSecurityGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.property.cidrBlock">CidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.property.ipAddress">IpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.property.timeouts"></a>

```csharp
public ProjectIpAccessListTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListTimeoutsOutputReference">ProjectIpAccessListTimeoutsOutputReference</a>

---

##### `AwsSecurityGroupInput`<sup>Optional</sup> <a name="AwsSecurityGroupInput" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.property.awsSecurityGroupInput"></a>

```csharp
public string AwsSecurityGroupInput { get; }
```

- *Type:* string

---

##### `CidrBlockInput`<sup>Optional</sup> <a name="CidrBlockInput" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.property.cidrBlockInput"></a>

```csharp
public string CidrBlockInput { get; }
```

- *Type:* string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.property.ipAddressInput"></a>

```csharp
public string IpAddressInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AwsSecurityGroup`<sup>Required</sup> <a name="AwsSecurityGroup" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.property.awsSecurityGroup"></a>

```csharp
public string AwsSecurityGroup { get; }
```

- *Type:* string

---

##### `CidrBlock`<sup>Required</sup> <a name="CidrBlock" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.property.cidrBlock"></a>

```csharp
public string CidrBlock { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.property.ipAddress"></a>

```csharp
public string IpAddress { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessList.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectIpAccessListConfig <a name="ProjectIpAccessListConfig" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new ProjectIpAccessListConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ProjectId,
    string AwsSecurityGroup = null,
    string CidrBlock = null,
    string Comment = null,
    string Id = null,
    string IpAddress = null,
    ProjectIpAccessListTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListConfig.property.projectId">ProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/project_ip_access_list#project_id ProjectIpAccessList#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListConfig.property.awsSecurityGroup">AwsSecurityGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/project_ip_access_list#aws_security_group ProjectIpAccessList#aws_security_group}. |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListConfig.property.cidrBlock">CidrBlock</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/project_ip_access_list#cidr_block ProjectIpAccessList#cidr_block}. |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListConfig.property.comment">Comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/project_ip_access_list#comment ProjectIpAccessList#comment}. |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/project_ip_access_list#id ProjectIpAccessList#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListConfig.property.ipAddress">IpAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/project_ip_access_list#ip_address ProjectIpAccessList#ip_address}. |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListTimeouts">ProjectIpAccessListTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/project_ip_access_list#project_id ProjectIpAccessList#project_id}.

---

##### `AwsSecurityGroup`<sup>Optional</sup> <a name="AwsSecurityGroup" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListConfig.property.awsSecurityGroup"></a>

```csharp
public string AwsSecurityGroup { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/project_ip_access_list#aws_security_group ProjectIpAccessList#aws_security_group}.

---

##### `CidrBlock`<sup>Optional</sup> <a name="CidrBlock" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListConfig.property.cidrBlock"></a>

```csharp
public string CidrBlock { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/project_ip_access_list#cidr_block ProjectIpAccessList#cidr_block}.

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListConfig.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/project_ip_access_list#comment ProjectIpAccessList#comment}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/project_ip_access_list#id ProjectIpAccessList#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpAddress`<sup>Optional</sup> <a name="IpAddress" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListConfig.property.ipAddress"></a>

```csharp
public string IpAddress { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/project_ip_access_list#ip_address ProjectIpAccessList#ip_address}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListConfig.property.timeouts"></a>

```csharp
public ProjectIpAccessListTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListTimeouts">ProjectIpAccessListTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/project_ip_access_list#timeouts ProjectIpAccessList#timeouts}

---

### ProjectIpAccessListTimeouts <a name="ProjectIpAccessListTimeouts" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new ProjectIpAccessListTimeouts {
    string Delete = null,
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/project_ip_access_list#delete ProjectIpAccessList#delete}. |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/project_ip_access_list#read ProjectIpAccessList#read}. |

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/project_ip_access_list#delete ProjectIpAccessList#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/project_ip_access_list#read ProjectIpAccessList#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### ProjectIpAccessListTimeoutsOutputReference <a name="ProjectIpAccessListTimeoutsOutputReference" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new ProjectIpAccessListTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.projectIpAccessList.ProjectIpAccessListTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



