# `mongodbatlas_ldap_configuration`

Refer to the Terraform Registory for docs: [`mongodbatlas_ldap_configuration`](https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/resources/ldap_configuration).

# `ldapConfiguration` Submodule <a name="`ldapConfiguration` Submodule" id="@cdktf/provider-mongodbatlas.ldapConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LdapConfiguration <a name="LdapConfiguration" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/resources/ldap_configuration mongodbatlas_ldap_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new LdapConfiguration(Construct Scope, string Id, LdapConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig">LdapConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig">LdapConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.putUserToDnMapping">PutUserToDnMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.resetAuthorizationEnabled">ResetAuthorizationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.resetAuthzQueryTemplate">ResetAuthzQueryTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.resetCaCertificate">ResetCaCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.resetUserToDnMapping">ResetUserToDnMapping</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutUserToDnMapping` <a name="PutUserToDnMapping" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.putUserToDnMapping"></a>

```csharp
private void PutUserToDnMapping(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.putUserToDnMapping.parameter.value"></a>

- *Type:* object

---

##### `ResetAuthorizationEnabled` <a name="ResetAuthorizationEnabled" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.resetAuthorizationEnabled"></a>

```csharp
private void ResetAuthorizationEnabled()
```

##### `ResetAuthzQueryTemplate` <a name="ResetAuthzQueryTemplate" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.resetAuthzQueryTemplate"></a>

```csharp
private void ResetAuthzQueryTemplate()
```

##### `ResetCaCertificate` <a name="ResetCaCertificate" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.resetCaCertificate"></a>

```csharp
private void ResetCaCertificate()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetUserToDnMapping` <a name="ResetUserToDnMapping" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.resetUserToDnMapping"></a>

```csharp
private void ResetUserToDnMapping()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

LdapConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

LdapConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

LdapConfiguration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.userToDnMapping">UserToDnMapping</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList">LdapConfigurationUserToDnMappingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.authenticationEnabledInput">AuthenticationEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.authorizationEnabledInput">AuthorizationEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.authzQueryTemplateInput">AuthzQueryTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.bindPasswordInput">BindPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.bindUsernameInput">BindUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.caCertificateInput">CaCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.hostnameInput">HostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.userToDnMappingInput">UserToDnMappingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.authenticationEnabled">AuthenticationEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.authorizationEnabled">AuthorizationEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.authzQueryTemplate">AuthzQueryTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.bindPassword">BindPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.bindUsername">BindUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.caCertificate">CaCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `UserToDnMapping`<sup>Required</sup> <a name="UserToDnMapping" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.userToDnMapping"></a>

```csharp
public LdapConfigurationUserToDnMappingList UserToDnMapping { get; }
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList">LdapConfigurationUserToDnMappingList</a>

---

##### `AuthenticationEnabledInput`<sup>Optional</sup> <a name="AuthenticationEnabledInput" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.authenticationEnabledInput"></a>

```csharp
public object AuthenticationEnabledInput { get; }
```

- *Type:* object

---

##### `AuthorizationEnabledInput`<sup>Optional</sup> <a name="AuthorizationEnabledInput" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.authorizationEnabledInput"></a>

```csharp
public object AuthorizationEnabledInput { get; }
```

- *Type:* object

---

##### `AuthzQueryTemplateInput`<sup>Optional</sup> <a name="AuthzQueryTemplateInput" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.authzQueryTemplateInput"></a>

```csharp
public string AuthzQueryTemplateInput { get; }
```

- *Type:* string

---

##### `BindPasswordInput`<sup>Optional</sup> <a name="BindPasswordInput" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.bindPasswordInput"></a>

```csharp
public string BindPasswordInput { get; }
```

- *Type:* string

---

##### `BindUsernameInput`<sup>Optional</sup> <a name="BindUsernameInput" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.bindUsernameInput"></a>

```csharp
public string BindUsernameInput { get; }
```

- *Type:* string

---

##### `CaCertificateInput`<sup>Optional</sup> <a name="CaCertificateInput" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.caCertificateInput"></a>

```csharp
public string CaCertificateInput { get; }
```

- *Type:* string

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.hostnameInput"></a>

```csharp
public string HostnameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `UserToDnMappingInput`<sup>Optional</sup> <a name="UserToDnMappingInput" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.userToDnMappingInput"></a>

```csharp
public object UserToDnMappingInput { get; }
```

- *Type:* object

---

##### `AuthenticationEnabled`<sup>Required</sup> <a name="AuthenticationEnabled" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.authenticationEnabled"></a>

```csharp
public object AuthenticationEnabled { get; }
```

- *Type:* object

---

##### `AuthorizationEnabled`<sup>Required</sup> <a name="AuthorizationEnabled" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.authorizationEnabled"></a>

```csharp
public object AuthorizationEnabled { get; }
```

- *Type:* object

---

##### `AuthzQueryTemplate`<sup>Required</sup> <a name="AuthzQueryTemplate" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.authzQueryTemplate"></a>

```csharp
public string AuthzQueryTemplate { get; }
```

- *Type:* string

---

##### `BindPassword`<sup>Required</sup> <a name="BindPassword" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.bindPassword"></a>

```csharp
public string BindPassword { get; }
```

- *Type:* string

---

##### `BindUsername`<sup>Required</sup> <a name="BindUsername" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.bindUsername"></a>

```csharp
public string BindUsername { get; }
```

- *Type:* string

---

##### `CaCertificate`<sup>Required</sup> <a name="CaCertificate" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.caCertificate"></a>

```csharp
public string CaCertificate { get; }
```

- *Type:* string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LdapConfigurationConfig <a name="LdapConfigurationConfig" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new LdapConfigurationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object AuthenticationEnabled,
    string BindPassword,
    string BindUsername,
    string Hostname,
    string ProjectId,
    object AuthorizationEnabled = null,
    string AuthzQueryTemplate = null,
    string CaCertificate = null,
    string Id = null,
    double Port = null,
    object UserToDnMapping = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.authenticationEnabled">AuthenticationEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/resources/ldap_configuration#authentication_enabled LdapConfiguration#authentication_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.bindPassword">BindPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/resources/ldap_configuration#bind_password LdapConfiguration#bind_password}. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.bindUsername">BindUsername</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/resources/ldap_configuration#bind_username LdapConfiguration#bind_username}. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.hostname">Hostname</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/resources/ldap_configuration#hostname LdapConfiguration#hostname}. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.projectId">ProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/resources/ldap_configuration#project_id LdapConfiguration#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.authorizationEnabled">AuthorizationEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/resources/ldap_configuration#authorization_enabled LdapConfiguration#authorization_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.authzQueryTemplate">AuthzQueryTemplate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/resources/ldap_configuration#authz_query_template LdapConfiguration#authz_query_template}. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.caCertificate">CaCertificate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/resources/ldap_configuration#ca_certificate LdapConfiguration#ca_certificate}. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/resources/ldap_configuration#id LdapConfiguration#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/resources/ldap_configuration#port LdapConfiguration#port}. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.userToDnMapping">UserToDnMapping</a></code> | <code>object</code> | user_to_dn_mapping block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AuthenticationEnabled`<sup>Required</sup> <a name="AuthenticationEnabled" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.authenticationEnabled"></a>

```csharp
public object AuthenticationEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/resources/ldap_configuration#authentication_enabled LdapConfiguration#authentication_enabled}.

---

##### `BindPassword`<sup>Required</sup> <a name="BindPassword" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.bindPassword"></a>

```csharp
public string BindPassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/resources/ldap_configuration#bind_password LdapConfiguration#bind_password}.

---

##### `BindUsername`<sup>Required</sup> <a name="BindUsername" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.bindUsername"></a>

```csharp
public string BindUsername { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/resources/ldap_configuration#bind_username LdapConfiguration#bind_username}.

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.hostname"></a>

```csharp
public string Hostname { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/resources/ldap_configuration#hostname LdapConfiguration#hostname}.

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/resources/ldap_configuration#project_id LdapConfiguration#project_id}.

---

##### `AuthorizationEnabled`<sup>Optional</sup> <a name="AuthorizationEnabled" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.authorizationEnabled"></a>

```csharp
public object AuthorizationEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/resources/ldap_configuration#authorization_enabled LdapConfiguration#authorization_enabled}.

---

##### `AuthzQueryTemplate`<sup>Optional</sup> <a name="AuthzQueryTemplate" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.authzQueryTemplate"></a>

```csharp
public string AuthzQueryTemplate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/resources/ldap_configuration#authz_query_template LdapConfiguration#authz_query_template}.

---

##### `CaCertificate`<sup>Optional</sup> <a name="CaCertificate" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.caCertificate"></a>

```csharp
public string CaCertificate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/resources/ldap_configuration#ca_certificate LdapConfiguration#ca_certificate}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/resources/ldap_configuration#id LdapConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/resources/ldap_configuration#port LdapConfiguration#port}.

---

##### `UserToDnMapping`<sup>Optional</sup> <a name="UserToDnMapping" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationConfig.property.userToDnMapping"></a>

```csharp
public object UserToDnMapping { get; set; }
```

- *Type:* object

user_to_dn_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/resources/ldap_configuration#user_to_dn_mapping LdapConfiguration#user_to_dn_mapping}

---

### LdapConfigurationUserToDnMapping <a name="LdapConfigurationUserToDnMapping" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMapping.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new LdapConfigurationUserToDnMapping {
    string LdapQuery = null,
    string Match = null,
    string Substitution = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMapping.property.ldapQuery">LdapQuery</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/resources/ldap_configuration#ldap_query LdapConfiguration#ldap_query}. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMapping.property.match">Match</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/resources/ldap_configuration#match LdapConfiguration#match}. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMapping.property.substitution">Substitution</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/resources/ldap_configuration#substitution LdapConfiguration#substitution}. |

---

##### `LdapQuery`<sup>Optional</sup> <a name="LdapQuery" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMapping.property.ldapQuery"></a>

```csharp
public string LdapQuery { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/resources/ldap_configuration#ldap_query LdapConfiguration#ldap_query}.

---

##### `Match`<sup>Optional</sup> <a name="Match" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMapping.property.match"></a>

```csharp
public string Match { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/resources/ldap_configuration#match LdapConfiguration#match}.

---

##### `Substitution`<sup>Optional</sup> <a name="Substitution" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMapping.property.substitution"></a>

```csharp
public string Substitution { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/resources/ldap_configuration#substitution LdapConfiguration#substitution}.

---

## Classes <a name="Classes" id="Classes"></a>

### LdapConfigurationUserToDnMappingList <a name="LdapConfigurationUserToDnMappingList" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new LdapConfigurationUserToDnMappingList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.get"></a>

```csharp
private LdapConfigurationUserToDnMappingOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LdapConfigurationUserToDnMappingOutputReference <a name="LdapConfigurationUserToDnMappingOutputReference" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Mongodbatlas;

new LdapConfigurationUserToDnMappingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.resetLdapQuery">ResetLdapQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.resetMatch">ResetMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.resetSubstitution">ResetSubstitution</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLdapQuery` <a name="ResetLdapQuery" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.resetLdapQuery"></a>

```csharp
private void ResetLdapQuery()
```

##### `ResetMatch` <a name="ResetMatch" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.resetMatch"></a>

```csharp
private void ResetMatch()
```

##### `ResetSubstitution` <a name="ResetSubstitution" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.resetSubstitution"></a>

```csharp
private void ResetSubstitution()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.property.ldapQueryInput">LdapQueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.property.matchInput">MatchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.property.substitutionInput">SubstitutionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.property.ldapQuery">LdapQuery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.property.match">Match</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.property.substitution">Substitution</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LdapQueryInput`<sup>Optional</sup> <a name="LdapQueryInput" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.property.ldapQueryInput"></a>

```csharp
public string LdapQueryInput { get; }
```

- *Type:* string

---

##### `MatchInput`<sup>Optional</sup> <a name="MatchInput" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.property.matchInput"></a>

```csharp
public string MatchInput { get; }
```

- *Type:* string

---

##### `SubstitutionInput`<sup>Optional</sup> <a name="SubstitutionInput" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.property.substitutionInput"></a>

```csharp
public string SubstitutionInput { get; }
```

- *Type:* string

---

##### `LdapQuery`<sup>Required</sup> <a name="LdapQuery" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.property.ldapQuery"></a>

```csharp
public string LdapQuery { get; }
```

- *Type:* string

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.property.match"></a>

```csharp
public string Match { get; }
```

- *Type:* string

---

##### `Substitution`<sup>Required</sup> <a name="Substitution" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.property.substitution"></a>

```csharp
public string Substitution { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-mongodbatlas.ldapConfiguration.LdapConfigurationUserToDnMappingOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



